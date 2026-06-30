"""Approved protocol catalog for postservice monitoring."""

from dataclasses import dataclass
from datetime import datetime
from typing import Any

from .workflow import CareCase, register_case


@dataclass(frozen=True)
class ProtocolQuestion:
    key: str
    text: str
    red_flag_when_true: bool = False


@dataclass(frozen=True)
class CareProtocol:
    key: str
    title: str
    specialty: str
    approved_memo: str
    checkin_hours: tuple[int, ...]
    questions: tuple[ProtocolQuestion, ...]
    control_visit_days: int | None = None
    review_after_days: int | None = None

    @property
    def red_flags(self) -> tuple[str, ...]:
        return tuple(question.key for question in self.questions if question.red_flag_when_true)


class ProtocolCatalog:
    def __init__(self, protocols: tuple[CareProtocol, ...]):
        self._protocols = {protocol.key: protocol for protocol in protocols}
        if len(self._protocols) != len(protocols):
            raise ValueError("protocol keys must be unique")

    @classmethod
    def from_mapping(cls, mapping: dict[str, dict[str, Any]]) -> "ProtocolCatalog":
        protocols = []
        for key, payload in mapping.items():
            questions = tuple(
                ProtocolQuestion(
                    key=str(question["key"]),
                    text=str(question["text"]),
                    red_flag_when_true=bool(question.get("red_flag_when_true", False)),
                )
                for question in payload["questions"]
            )
            protocols.append(
                CareProtocol(
                    key=key,
                    title=str(payload["title"]),
                    specialty=str(payload["specialty"]),
                    approved_memo=str(payload["approved_memo"]),
                    checkin_hours=tuple(int(hour) for hour in payload["checkin_hours"]),
                    questions=questions,
                    control_visit_days=payload.get("control_visit_days"),
                    review_after_days=payload.get("review_after_days"),
                )
            )
        return cls(tuple(protocols))

    def list_protocols(self, *, specialty: str | None = None) -> tuple[CareProtocol, ...]:
        protocols = tuple(self._protocols.values())
        if specialty is None:
            return protocols
        return tuple(protocol for protocol in protocols if protocol.specialty == specialty)

    def get(self, key: str) -> CareProtocol:
        try:
            return self._protocols[key]
        except KeyError as exc:
            raise KeyError(f"unknown protocol: {key}") from exc

    def register_case_from_protocol(
        self,
        *,
        protocol_key: str,
        client_name: str,
        client_contact: str,
        service_name: str,
        control_visit_at: datetime | None = None,
    ) -> CareCase:
        protocol = self.get(protocol_key)
        return register_case(
            client_name=client_name,
            client_contact=client_contact,
            service_name=service_name,
            protocol_name=protocol.key,
            approved_memo=protocol.approved_memo,
            checkin_hours=protocol.checkin_hours,
            red_flags=protocol.red_flags,
            control_visit_at=control_visit_at,
        )


DEFAULT_PROTOCOLS: dict[str, dict[str, Any]] = {
    "dentistry-implant-day-0": {
        "title": "Имплантация: первые 72 часа",
        "specialty": "dentistry",
        "approved_memo": (
            "Памятка клиники после имплантации: соблюдайте выданные врачом ограничения "
            "и свяжитесь с клиникой при тревожных симптомах."
        ),
        "checkin_hours": (6, 24, 72),
        "control_visit_days": 7,
        "review_after_days": 5,
        "questions": (
            {"key": "severe_pain", "text": "Есть сильная боль?", "red_flag_when_true": True},
            {"key": "heavy_bleeding", "text": "Есть выраженное кровотечение?", "red_flag_when_true": True},
            {"key": "fever", "text": "Есть температура?", "red_flag_when_true": True},
            {"key": "memo_read", "text": "Памятка понятна?", "red_flag_when_true": False},
        ),
    },
    "cosmetology-injection-day-0": {
        "title": "Инъекционная косметология: контроль состояния",
        "specialty": "cosmetology",
        "approved_memo": (
            "Памятка клиники после процедуры: следуйте утвержденным ограничениям "
            "и отправьте фото администратору, если вас беспокоит состояние зоны процедуры."
        ),
        "checkin_hours": (6, 24, 72),
        "control_visit_days": 14,
        "review_after_days": 7,
        "questions": (
            {"key": "rapid_swelling", "text": "Отек быстро нарастает?", "red_flag_when_true": True},
            {"key": "skin_color_change", "text": "Есть резкое изменение цвета кожи?", "red_flag_when_true": True},
            {"key": "severe_pain", "text": "Есть сильная боль?", "red_flag_when_true": True},
            {"key": "photo_ready", "text": "Готовы приложить фото?", "red_flag_when_true": False},
        ),
    },
    "vet-surgery-day-0": {
        "title": "Ветклиника: послеоперационный контроль",
        "specialty": "veterinary",
        "approved_memo": (
            "Памятка клиники после операции: следуйте назначениям врача и сообщите "
            "администратору, если состояние питомца вызывает тревогу."
        ),
        "checkin_hours": (6, 24, 72),
        "control_visit_days": 10,
        "review_after_days": 5,
        "questions": (
            {"key": "no_appetite", "text": "Питомец отказывается от еды?", "red_flag_when_true": True},
            {"key": "bleeding", "text": "Есть кровотечение?", "red_flag_when_true": True},
            {"key": "lethargy", "text": "Есть сильная вялость?", "red_flag_when_true": True},
            {"key": "wound_photo_ready", "text": "Готовы приложить фото шва?", "red_flag_when_true": False},
        ),
    },
}


def default_catalog() -> ProtocolCatalog:
    return ProtocolCatalog.from_mapping(DEFAULT_PROTOCOLS)

