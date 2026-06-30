"""Repository interfaces and in-memory storage for HOA/UK dispatcher MVP."""

from dataclasses import dataclass, field

from .dispatcher import BroadcastAudit
from .resident_flow import ResidentDraft
from .workflow import MeterReading, ResidentTicket


@dataclass
class HoaRepository:
    drafts: dict[str, ResidentDraft] = field(default_factory=dict)
    tickets: dict[str, ResidentTicket] = field(default_factory=dict)
    readings: dict[str, MeterReading] = field(default_factory=dict)
    broadcasts: dict[str, BroadcastAudit] = field(default_factory=dict)

    def save_draft(self, draft: ResidentDraft) -> None:
        self.drafts[draft.resident_contact] = draft

    def get_draft(self, resident_contact: str) -> ResidentDraft | None:
        return self.drafts.get(resident_contact)

    def delete_draft(self, resident_contact: str) -> None:
        self.drafts.pop(resident_contact, None)

    def save_ticket(self, ticket: ResidentTicket) -> None:
        self.tickets[ticket.ticket_id] = ticket

    def get_ticket(self, ticket_id: str) -> ResidentTicket | None:
        return self.tickets.get(ticket_id)

    def list_tickets(self) -> tuple[ResidentTicket, ...]:
        return tuple(self.tickets.values())

    def save_reading(self, reading: MeterReading) -> None:
        self.readings[reading.reading_id] = reading

    def save_broadcast(self, audit: BroadcastAudit) -> None:
        self.broadcasts[audit.audit_id] = audit

