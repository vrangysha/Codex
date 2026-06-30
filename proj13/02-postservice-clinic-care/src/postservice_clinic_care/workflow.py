"""Dependency-free workflow core for post-procedure monitoring."""

from dataclasses import dataclass, field, replace
from datetime import datetime, timedelta, timezone
from enum import Enum
from uuid import uuid4


class CareStatus(str, Enum):
    SCHEDULED = "scheduled"
    MONITORING = "monitoring"
    ESCALATED = "escalated"
    COMPLETED = "completed"


@dataclass(frozen=True)
class CareCase:
    case_id: str
    client_name: str
    client_contact: str
    service_name: str
    protocol_name: str
    approved_memo: str
    checkin_hours: tuple[int, ...]
    red_flags: tuple[str, ...]
    control_visit_at: datetime | None = None
    status: CareStatus = CareStatus.SCHEDULED
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


@dataclass(frozen=True)
class CheckinResult:
    case: CareCase
    has_red_flags: bool
    matched_flags: tuple[str, ...]
    escalation_message: str | None


def register_case(
    *,
    client_name: str,
    client_contact: str,
    service_name: str,
    protocol_name: str,
    approved_memo: str,
    checkin_hours: tuple[int, ...] = (6, 24, 72),
    red_flags: tuple[str, ...] = ("fever", "heavy_bleeding", "severe_pain"),
    control_visit_at: datetime | None = None,
) -> CareCase:
    required = [client_name, client_contact, service_name, protocol_name, approved_memo]
    if any(not item.strip() for item in required):
        raise ValueError("client, service, protocol and approved memo are required")
    if not checkin_hours:
        raise ValueError("at least one checkin hour is required")

    return CareCase(
        case_id=f"CC-{uuid4().hex[:8].upper()}",
        client_name=client_name.strip(),
        client_contact=client_contact.strip(),
        service_name=service_name.strip(),
        protocol_name=protocol_name.strip(),
        approved_memo=approved_memo.strip(),
        checkin_hours=tuple(sorted(checkin_hours)),
        red_flags=tuple(flag.strip() for flag in red_flags),
        control_visit_at=control_visit_at,
        status=CareStatus.MONITORING,
    )


def build_checkin_schedule(case: CareCase) -> tuple[datetime, ...]:
    return tuple(case.created_at + timedelta(hours=hour) for hour in case.checkin_hours)


def evaluate_checkin(
    case: CareCase,
    *,
    symptoms: dict[str, bool],
    comment: str = "",
    photo_urls: tuple[str, ...] = (),
) -> CheckinResult:
    del comment, photo_urls
    matched = tuple(flag for flag in case.red_flags if symptoms.get(flag, False))
    if matched:
        escalated = replace(case, status=CareStatus.ESCALATED)
        return CheckinResult(
            case=escalated,
            has_red_flags=True,
            matched_flags=matched,
            escalation_message=(
                f"Escalate case {case.case_id}: red flags detected: {', '.join(matched)}"
            ),
        )

    return CheckinResult(
        case=case,
        has_red_flags=False,
        matched_flags=(),
        escalation_message=None,
    )

