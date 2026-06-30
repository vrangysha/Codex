"""Admin escalation queue for red-flag care cases."""

from dataclasses import dataclass, field, replace
from datetime import datetime, timezone
from enum import Enum
from typing import Iterable
from uuid import uuid4

from .workflow import CheckinResult


class EscalationStatus(str, Enum):
    NEW = "new"
    TAKEN = "taken"
    CLOSED = "closed"


@dataclass(frozen=True)
class EscalationEvent:
    actor: str
    action: str
    note: str
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


@dataclass(frozen=True)
class EscalationTicket:
    escalation_id: str
    case_id: str
    client_name: str
    client_contact: str
    matched_flags: tuple[str, ...]
    status: EscalationStatus = EscalationStatus.NEW
    assignee: str | None = None
    checkin_comment: str = ""
    photo_urls: tuple[str, ...] = ()
    history: tuple[EscalationEvent, ...] = ()
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


def create_escalation(
    result: CheckinResult,
    *,
    checkin_comment: str = "",
    photo_urls: tuple[str, ...] = (),
) -> EscalationTicket:
    if not result.has_red_flags:
        raise ValueError("cannot create escalation without red flags")

    ticket = EscalationTicket(
        escalation_id=f"ESC-{uuid4().hex[:8].upper()}",
        case_id=result.case.case_id,
        client_name=result.case.client_name,
        client_contact=result.case.client_contact,
        matched_flags=result.matched_flags,
        checkin_comment=checkin_comment.strip(),
        photo_urls=tuple(photo_urls),
    )
    return replace(
        ticket,
        history=(
            EscalationEvent(
                actor="system",
                action="created",
                note=result.escalation_message or "red flags detected",
            ),
        ),
    )


def take_escalation(ticket: EscalationTicket, *, assignee: str) -> EscalationTicket:
    if not assignee.strip():
        raise ValueError("assignee is required")
    return replace(
        ticket,
        status=EscalationStatus.TAKEN,
        assignee=assignee.strip(),
        history=ticket.history
        + (
            EscalationEvent(
                actor=assignee.strip(),
                action="taken",
                note="case taken by admin",
            ),
        ),
    )


def close_escalation(ticket: EscalationTicket, *, actor: str, resolution: str) -> EscalationTicket:
    if not actor.strip() or not resolution.strip():
        raise ValueError("actor and resolution are required")
    return replace(
        ticket,
        status=EscalationStatus.CLOSED,
        history=ticket.history
        + (
            EscalationEvent(
                actor=actor.strip(),
                action="closed",
                note=resolution.strip(),
            ),
        ),
    )


def filter_escalations(
    tickets: Iterable[EscalationTicket],
    *,
    status: EscalationStatus | None = None,
    assignee: str | None = None,
) -> tuple[EscalationTicket, ...]:
    result = tuple(tickets)
    if status is not None:
        result = tuple(ticket for ticket in result if ticket.status == status)
    if assignee is not None:
        result = tuple(ticket for ticket in result if ticket.assignee == assignee)
    return result

