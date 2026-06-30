"""Dispatcher panel helpers for HOA/property management workflows."""

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Iterable
from uuid import uuid4

from .workflow import (
    MeterReading,
    ResidentTicket,
    TicketStatus,
    assign_worker,
    build_broadcast,
    close_ticket,
    record_meter_reading,
)


@dataclass(frozen=True)
class WorkerProfile:
    name: str
    contact: str
    categories: tuple[str, ...] = ()


@dataclass(frozen=True)
class DispatcherNotification:
    recipient: str
    message: str
    payload: dict[str, str]


@dataclass(frozen=True)
class MeterCollectionCampaign:
    campaign_id: str
    period: str
    target: str
    meter_types: tuple[str, ...]
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


@dataclass(frozen=True)
class BroadcastAudit:
    audit_id: str
    topic: str
    body: str
    target: str
    created_by: str
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


def filter_tickets(
    tickets: Iterable[ResidentTicket],
    *,
    status: TicketStatus | None = None,
    category: str | None = None,
    priority: str | None = None,
) -> tuple[ResidentTicket, ...]:
    result = tuple(tickets)
    if status is not None:
        result = tuple(ticket for ticket in result if ticket.status == status)
    if category is not None:
        normalized = category.strip().lower()
        result = tuple(ticket for ticket in result if ticket.category.lower() == normalized)
    if priority is not None:
        result = tuple(ticket for ticket in result if ticket.priority == priority)
    return result


def assign_ticket_to_worker(
    ticket: ResidentTicket,
    worker: WorkerProfile,
) -> tuple[ResidentTicket, DispatcherNotification]:
    updated = assign_worker(ticket, worker.name)
    return updated, DispatcherNotification(
        recipient=worker.contact,
        message=f"Заявка {updated.ticket_id}: {updated.category}, кв. {updated.apartment}.",
        payload={"ticket_id": updated.ticket_id, "role": "worker"},
    )


def close_ticket_with_result(
    ticket: ResidentTicket,
    *,
    result_photo_urls: tuple[str, ...],
) -> ResidentTicket:
    return close_ticket(ticket, result_photo_urls)


def create_meter_collection_campaign(
    *,
    period: str,
    target: str,
    meter_types: tuple[str, ...],
) -> MeterCollectionCampaign:
    if not period.strip() or not target.strip() or not meter_types:
        raise ValueError("period, target and meter types are required")
    return MeterCollectionCampaign(
        campaign_id=f"MC-{uuid4().hex[:8].upper()}",
        period=period.strip(),
        target=target.strip(),
        meter_types=tuple(meter_type.strip() for meter_type in meter_types if meter_type.strip()),
    )


def record_campaign_reading(
    campaign: MeterCollectionCampaign,
    *,
    resident_contact: str,
    building: str,
    apartment: str,
    meter_type: str,
    value: str,
    photo_url: str | None = None,
) -> MeterReading:
    if meter_type not in campaign.meter_types:
        raise ValueError("meter type is not part of the campaign")
    return record_meter_reading(
        resident_contact=resident_contact,
        building=building,
        apartment=apartment,
        meter_type=meter_type,
        value=value,
        period=campaign.period,
        photo_url=photo_url,
    )


def create_broadcast_audit(
    *,
    topic: str,
    body: str,
    target: str,
    created_by: str,
) -> BroadcastAudit:
    broadcast = build_broadcast(topic, body, target)
    if not created_by.strip():
        raise ValueError("created_by is required")
    return BroadcastAudit(
        audit_id=f"BA-{uuid4().hex[:8].upper()}",
        topic=broadcast["topic"],
        body=broadcast["body"],
        target=broadcast["target"],
        created_by=created_by.strip(),
    )

