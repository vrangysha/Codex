"""Dependency-free workflow core for resident service requests."""

from dataclasses import dataclass, field, replace
from datetime import date, datetime, timezone
from enum import Enum
from uuid import uuid4


class TicketStatus(str, Enum):
    NEW = "new"
    ASSIGNED = "assigned"
    IN_PROGRESS = "in_progress"
    CLOSED = "closed"
    CANCELLED = "cancelled"


@dataclass(frozen=True)
class ResidentTicket:
    ticket_id: str
    resident_name: str
    resident_contact: str
    category: str
    building: str
    entrance: str
    apartment: str
    comment: str
    photo_urls: tuple[str, ...] = ()
    worker: str | None = None
    result_photo_urls: tuple[str, ...] = ()
    status: TicketStatus = TicketStatus.NEW
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


@dataclass(frozen=True)
class MeterReading:
    reading_id: str
    resident_contact: str
    building: str
    apartment: str
    period: str
    meter_type: str
    value: str
    photo_url: str | None = None
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


def create_ticket(
    *,
    resident_name: str,
    resident_contact: str,
    category: str,
    building: str,
    entrance: str,
    apartment: str,
    comment: str,
    photo_urls: tuple[str, ...] = (),
) -> ResidentTicket:
    required = [
        resident_name,
        resident_contact,
        category,
        building,
        entrance,
        apartment,
        comment,
    ]
    if any(not item.strip() for item in required):
        raise ValueError("resident, category, address and comment are required")

    return ResidentTicket(
        ticket_id=f"UK-{uuid4().hex[:8].upper()}",
        resident_name=resident_name.strip(),
        resident_contact=resident_contact.strip(),
        category=category.strip(),
        building=building.strip(),
        entrance=entrance.strip(),
        apartment=apartment.strip(),
        comment=comment.strip(),
        photo_urls=tuple(photo_urls),
    )


def assign_worker(ticket: ResidentTicket, worker: str) -> ResidentTicket:
    if not worker.strip():
        raise ValueError("worker is required")
    return replace(ticket, worker=worker.strip(), status=TicketStatus.ASSIGNED)


def close_ticket(ticket: ResidentTicket, result_photo_urls: tuple[str, ...]) -> ResidentTicket:
    if not ticket.worker:
        raise ValueError("worker must be assigned before close")
    if not result_photo_urls:
        raise ValueError("result photo is required")
    return replace(
        ticket,
        result_photo_urls=tuple(result_photo_urls),
        status=TicketStatus.CLOSED,
    )


def record_meter_reading(
    *,
    resident_contact: str,
    building: str,
    apartment: str,
    meter_type: str,
    value: str,
    period: str | None = None,
    photo_url: str | None = None,
) -> MeterReading:
    required = [resident_contact, building, apartment, meter_type, value]
    if any(not item.strip() for item in required):
        raise ValueError("contact, address, meter type and value are required")

    return MeterReading(
        reading_id=f"MR-{uuid4().hex[:8].upper()}",
        resident_contact=resident_contact.strip(),
        building=building.strip(),
        apartment=apartment.strip(),
        period=period or date.today().strftime("%Y-%m"),
        meter_type=meter_type.strip(),
        value=value.strip(),
        photo_url=photo_url.strip() if photo_url else None,
    )


def build_resident_status_message(ticket: ResidentTicket) -> str:
    labels = {
        TicketStatus.NEW: "Заявка принята.",
        TicketStatus.ASSIGNED: f"Назначен исполнитель: {ticket.worker}.",
        TicketStatus.IN_PROGRESS: "Заявка в работе.",
        TicketStatus.CLOSED: "Заявка закрыта.",
        TicketStatus.CANCELLED: "Заявка отменена.",
    }
    return f"{labels[ticket.status]} Номер заявки: {ticket.ticket_id}"


def build_broadcast(topic: str, body: str, target: str = "all") -> dict[str, str]:
    if not topic.strip() or not body.strip():
        raise ValueError("topic and body are required")
    return {
        "topic": topic.strip(),
        "body": body.strip(),
        "target": target.strip() or "all",
    }

