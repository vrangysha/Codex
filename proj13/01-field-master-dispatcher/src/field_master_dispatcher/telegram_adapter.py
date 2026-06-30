"""Thin Telegram-style adapter over the field dispatcher flows."""

from dataclasses import dataclass

from .intake import build_request, record_answer, start_intake
from .storage import FieldRepository
from .workflow import ServiceRequest


@dataclass(frozen=True)
class TelegramEvent:
    contact: str
    name: str
    text: str = ""
    media_urls: tuple[str, ...] = ()


@dataclass(frozen=True)
class AdapterResponse:
    message: str
    request: ServiceRequest | None = None


class FieldTelegramAdapter:
    def __init__(self, repository: FieldRepository):
        self.repository = repository

    def start(self, event: TelegramEvent) -> AdapterResponse:
        draft = start_intake(client_name=event.name, client_contact=event.contact)
        self.repository.save_draft(draft)
        return AdapterResponse(message=draft.prompt())

    def handle_message(self, event: TelegramEvent) -> AdapterResponse:
        draft = self.repository.get_draft(event.contact)
        if draft is None:
            return self.start(event)

        draft = record_answer(draft, text=event.text, media_urls=event.media_urls)
        if draft.is_complete():
            request = build_request(draft)
            self.repository.save_request(request)
            self.repository.delete_draft(event.contact)
            return AdapterResponse(
                message=f"Заявка принята. Номер заявки: {request.request_id}",
                request=request,
            )

        self.repository.save_draft(draft)
        return AdapterResponse(message=draft.prompt())

