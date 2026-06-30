"""Domain core for HOA and property management dispatcher."""

from .workflow import (
    MeterReading,
    ResidentTicket,
    TicketStatus,
    assign_worker,
    build_broadcast,
    build_resident_status_message,
    close_ticket,
    create_ticket,
    record_meter_reading,
)
from .resident_flow import (
    ResidentDraft,
    ResidentStep,
    build_ticket,
    list_open_tickets,
    priority_for_category,
    record_answer,
    restore_draft,
    start_resident_ticket,
)

__all__ = [
    "MeterReading",
    "ResidentDraft",
    "ResidentStep",
    "ResidentTicket",
    "TicketStatus",
    "assign_worker",
    "build_broadcast",
    "build_ticket",
    "build_resident_status_message",
    "close_ticket",
    "create_ticket",
    "list_open_tickets",
    "priority_for_category",
    "record_answer",
    "record_meter_reading",
    "restore_draft",
    "start_resident_ticket",
]

