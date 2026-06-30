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

__all__ = [
    "MeterReading",
    "ResidentTicket",
    "TicketStatus",
    "assign_worker",
    "build_broadcast",
    "build_resident_status_message",
    "close_ticket",
    "create_ticket",
    "record_meter_reading",
]

