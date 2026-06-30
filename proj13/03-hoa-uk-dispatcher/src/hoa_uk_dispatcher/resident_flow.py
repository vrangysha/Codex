"""Framework-agnostic resident bot flow."""

from dataclasses import dataclass, field, replace
from enum import Enum
from typing import Any

from .workflow import ResidentTicket, TicketStatus, create_ticket


class ResidentStep(str, Enum):
    CATEGORY = "category"
    BUILDING = "building"
    ENTRANCE = "entrance"
    APARTMENT = "apartment"
    COMMENT = "comment"
    PHOTO = "photo_urls"
    DONE = "done"


STEP_ORDER = (
    ResidentStep.CATEGORY,
    ResidentStep.BUILDING,
    ResidentStep.ENTRANCE,
    ResidentStep.APARTMENT,
    ResidentStep.COMMENT,
    ResidentStep.PHOTO,
)

STEP_PROMPTS = {
    ResidentStep.CATEGORY: "Выберите тип обращения.",
    ResidentStep.BUILDING: "Укажите дом или корпус.",
    ResidentStep.ENTRANCE: "Укажите подъезд.",
    ResidentStep.APARTMENT: "Укажите квартиру.",
    ResidentStep.COMMENT: "Опишите проблему.",
    ResidentStep.PHOTO: "Прикрепите фото или напишите `skip`.",
}

EMERGENCY_CATEGORIES = {"авария", "emergency", "прорыв", "нет воды", "нет света"}


@dataclass(frozen=True)
class ResidentDraft:
    resident_name: str
    resident_contact: str
    current_step: ResidentStep = ResidentStep.CATEGORY
    data: dict[str, Any] = field(default_factory=dict)

    def prompt(self) -> str:
        if self.current_step == ResidentStep.DONE:
            return "Заявка собрана."
        return STEP_PROMPTS[self.current_step]

    def is_complete(self) -> bool:
        return self.current_step == ResidentStep.DONE

    def serialize(self) -> dict[str, Any]:
        return {
            "resident_name": self.resident_name,
            "resident_contact": self.resident_contact,
            "current_step": self.current_step.value,
            "data": self.data,
        }


def restore_draft(payload: dict[str, Any]) -> ResidentDraft:
    return ResidentDraft(
        resident_name=str(payload["resident_name"]),
        resident_contact=str(payload["resident_contact"]),
        current_step=ResidentStep(str(payload["current_step"])),
        data=dict(payload.get("data", {})),
    )


def start_resident_ticket(*, resident_name: str, resident_contact: str) -> ResidentDraft:
    if not resident_name.strip() or not resident_contact.strip():
        raise ValueError("resident name and contact are required")
    return ResidentDraft(
        resident_name=resident_name.strip(),
        resident_contact=resident_contact.strip(),
    )


def record_answer(
    draft: ResidentDraft,
    *,
    text: str = "",
    photo_urls: tuple[str, ...] = (),
) -> ResidentDraft:
    if draft.is_complete():
        return draft

    data = dict(draft.data)
    data[draft.current_step.value] = _normalize_answer(
        draft.current_step,
        text=text,
        photo_urls=photo_urls,
    )
    return replace(draft, data=data, current_step=_next_step(draft.current_step))


def build_ticket(draft: ResidentDraft) -> ResidentTicket:
    if not draft.is_complete():
        raise ValueError("resident draft is not complete")

    category = str(draft.data[ResidentStep.CATEGORY.value])
    return create_ticket(
        resident_name=draft.resident_name,
        resident_contact=draft.resident_contact,
        category=category,
        building=str(draft.data[ResidentStep.BUILDING.value]),
        entrance=str(draft.data[ResidentStep.ENTRANCE.value]),
        apartment=str(draft.data[ResidentStep.APARTMENT.value]),
        comment=str(draft.data[ResidentStep.COMMENT.value]),
        priority=priority_for_category(category),
        photo_urls=tuple(draft.data.get(ResidentStep.PHOTO.value, ())),
    )


def priority_for_category(category: str) -> str:
    normalized = category.strip().lower()
    return "emergency" if normalized in EMERGENCY_CATEGORIES else "normal"


def list_open_tickets(
    tickets: tuple[ResidentTicket, ...],
    *,
    resident_contact: str,
) -> tuple[ResidentTicket, ...]:
    return tuple(
        ticket
        for ticket in tickets
        if ticket.resident_contact == resident_contact
        and ticket.status not in {TicketStatus.CLOSED, TicketStatus.CANCELLED}
    )


def _normalize_answer(
    step: ResidentStep,
    *,
    text: str,
    photo_urls: tuple[str, ...],
) -> Any:
    if step == ResidentStep.PHOTO:
        return tuple(url.strip() for url in photo_urls if url.strip())

    cleaned = text.strip()
    if not cleaned:
        raise ValueError(f"{step.value} answer is required")
    return cleaned


def _next_step(current: ResidentStep) -> ResidentStep:
    try:
        index = STEP_ORDER.index(current)
    except ValueError as exc:
        raise ValueError(f"unknown resident step: {current}") from exc

    if index + 1 >= len(STEP_ORDER):
        return ResidentStep.DONE
    return STEP_ORDER[index + 1]

