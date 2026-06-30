"""Thin role-based bot adapter over resident and dispatcher flows."""

from dataclasses import dataclass

from .dispatcher import WorkerProfile, assign_ticket_to_worker, close_ticket_with_result
from .resident_flow import build_ticket, record_answer, start_resident_ticket
from .storage import HoaRepository
from .workflow import ResidentTicket


@dataclass(frozen=True)
class BotEvent:
    contact: str
    name: str
    text: str = ""
    photo_urls: tuple[str, ...] = ()


@dataclass(frozen=True)
class BotResponse:
    message: str
    ticket: ResidentTicket | None = None


class HoaBotAdapter:
    def __init__(self, repository: HoaRepository):
        self.repository = repository

    def start_resident_request(self, event: BotEvent) -> BotResponse:
        draft = start_resident_ticket(resident_name=event.name, resident_contact=event.contact)
        self.repository.save_draft(draft)
        return BotResponse(message=draft.prompt())

    def handle_resident_message(self, event: BotEvent) -> BotResponse:
        draft = self.repository.get_draft(event.contact)
        if draft is None:
            return self.start_resident_request(event)

        draft = record_answer(draft, text=event.text, photo_urls=event.photo_urls)
        if draft.is_complete():
            ticket = build_ticket(draft)
            self.repository.save_ticket(ticket)
            self.repository.delete_draft(event.contact)
            return BotResponse(message=f"Заявка создана: {ticket.ticket_id}", ticket=ticket)

        self.repository.save_draft(draft)
        return BotResponse(message=draft.prompt())

    def dispatcher_assign(self, *, ticket_id: str, worker: WorkerProfile) -> BotResponse:
        ticket = self._require_ticket(ticket_id)
        updated, _ = assign_ticket_to_worker(ticket, worker)
        self.repository.save_ticket(updated)
        return BotResponse(message=f"Исполнитель назначен: {worker.name}", ticket=updated)

    def worker_close(self, *, ticket_id: str, result_photo_urls: tuple[str, ...]) -> BotResponse:
        ticket = self._require_ticket(ticket_id)
        updated = close_ticket_with_result(ticket, result_photo_urls=result_photo_urls)
        self.repository.save_ticket(updated)
        return BotResponse(message=f"Заявка закрыта: {ticket_id}", ticket=updated)

    def _require_ticket(self, ticket_id: str) -> ResidentTicket:
        ticket = self.repository.get_ticket(ticket_id)
        if ticket is None:
            raise KeyError(f"unknown ticket: {ticket_id}")
        return ticket

