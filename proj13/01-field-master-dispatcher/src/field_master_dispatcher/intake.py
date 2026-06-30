"""Framework-agnostic intake flow for a field-service Telegram bot."""

from dataclasses import dataclass, field, replace
from enum import Enum
from typing import Any

from .workflow import ServiceRequest, create_request


class IntakeStep(str, Enum):
    SERVICE = "service"
    ADDRESS = "address"
    DESCRIPTION = "description"
    MEDIA = "media_urls"
    URGENCY = "urgency"
    DISTRICT = "district"
    AVAILABLE_WINDOWS = "available_windows"
    APPLIANCE_MODEL = "appliance_model"
    DONE = "done"


STEP_ORDER = (
    IntakeStep.SERVICE,
    IntakeStep.ADDRESS,
    IntakeStep.DESCRIPTION,
    IntakeStep.MEDIA,
    IntakeStep.URGENCY,
    IntakeStep.DISTRICT,
    IntakeStep.AVAILABLE_WINDOWS,
    IntakeStep.APPLIANCE_MODEL,
)

STEP_PROMPTS = {
    IntakeStep.SERVICE: "Какая услуга нужна?",
    IntakeStep.ADDRESS: "Укажите адрес выезда.",
    IntakeStep.DESCRIPTION: "Кратко опишите проблему.",
    IntakeStep.MEDIA: "Прикрепите фото/видео или напишите `skip`.",
    IntakeStep.URGENCY: "Насколько срочно нужен мастер?",
    IntakeStep.DISTRICT: "Укажите район.",
    IntakeStep.AVAILABLE_WINDOWS: "Когда вам удобно принять мастера?",
    IntakeStep.APPLIANCE_MODEL: "Укажите модель техники или напишите `skip`.",
}


@dataclass(frozen=True)
class IntakeDraft:
    client_name: str
    client_contact: str
    current_step: IntakeStep = IntakeStep.SERVICE
    data: dict[str, Any] = field(default_factory=dict)

    def prompt(self) -> str:
        if self.current_step == IntakeStep.DONE:
            return "Заявка собрана."
        return STEP_PROMPTS[self.current_step]

    def is_complete(self) -> bool:
        return self.current_step == IntakeStep.DONE

    def serialize(self) -> dict[str, Any]:
        return {
            "client_name": self.client_name,
            "client_contact": self.client_contact,
            "current_step": self.current_step.value,
            "data": self.data,
        }


def restore_draft(payload: dict[str, Any]) -> IntakeDraft:
    return IntakeDraft(
        client_name=str(payload["client_name"]),
        client_contact=str(payload["client_contact"]),
        current_step=IntakeStep(str(payload["current_step"])),
        data=dict(payload.get("data", {})),
    )


def start_intake(*, client_name: str, client_contact: str) -> IntakeDraft:
    if not client_name.strip() or not client_contact.strip():
        raise ValueError("client name and contact are required")
    return IntakeDraft(client_name=client_name.strip(), client_contact=client_contact.strip())


def record_answer(
    draft: IntakeDraft,
    *,
    text: str = "",
    media_urls: tuple[str, ...] = (),
) -> IntakeDraft:
    if draft.is_complete():
        return draft

    value = _normalize_answer(draft.current_step, text=text, media_urls=media_urls)
    data = dict(draft.data)
    data[draft.current_step.value] = value
    return replace(draft, data=data, current_step=_next_step(draft.current_step))


def build_request(draft: IntakeDraft, *, price_hint: str | None = None) -> ServiceRequest:
    if not draft.is_complete():
        raise ValueError("intake draft is not complete")

    return create_request(
        client_name=draft.client_name,
        client_contact=draft.client_contact,
        service=str(draft.data[IntakeStep.SERVICE.value]),
        address=str(draft.data[IntakeStep.ADDRESS.value]),
        description=str(draft.data[IntakeStep.DESCRIPTION.value]),
        district=str(draft.data[IntakeStep.DISTRICT.value]),
        urgency=str(draft.data[IntakeStep.URGENCY.value]),
        available_windows=tuple(draft.data[IntakeStep.AVAILABLE_WINDOWS.value]),
        media_urls=tuple(draft.data.get(IntakeStep.MEDIA.value, ())),
        appliance_model=draft.data.get(IntakeStep.APPLIANCE_MODEL.value) or None,
        price_hint=price_hint,
    )


def _normalize_answer(
    step: IntakeStep,
    *,
    text: str,
    media_urls: tuple[str, ...],
) -> Any:
    cleaned = text.strip()
    if step == IntakeStep.MEDIA:
        return tuple(url.strip() for url in media_urls if url.strip())
    if step == IntakeStep.APPLIANCE_MODEL and cleaned.lower() == "skip":
        return ""
    if step == IntakeStep.AVAILABLE_WINDOWS:
        windows = tuple(part.strip() for part in cleaned.replace("\n", ",").split(",") if part.strip())
        if not windows:
            raise ValueError("at least one available time window is required")
        return windows
    if not cleaned:
        raise ValueError(f"{step.value} answer is required")
    return cleaned


def _next_step(current: IntakeStep) -> IntakeStep:
    try:
        index = STEP_ORDER.index(current)
    except ValueError as exc:
        raise ValueError(f"unknown intake step: {current}") from exc

    if index + 1 >= len(STEP_ORDER):
        return IntakeStep.DONE
    return STEP_ORDER[index + 1]

