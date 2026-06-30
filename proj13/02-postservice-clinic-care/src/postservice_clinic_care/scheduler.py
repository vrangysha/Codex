"""Check-in scheduler and message adapter for clinic care MVP."""

from dataclasses import dataclass
from datetime import datetime

from .escalation import EscalationTicket, create_escalation
from .protocols import ProtocolCatalog
from .workflow import CareCase, CheckinResult, build_checkin_schedule, evaluate_checkin


@dataclass(frozen=True)
class DueCheckin:
    case_id: str
    protocol_name: str
    hour: int
    due_at: datetime
    message: str


@dataclass(frozen=True)
class CheckinAdapterResult:
    checkin: CheckinResult
    escalation: EscalationTicket | None


def due_checkins(
    case: CareCase,
    *,
    now: datetime,
    sent_hours: tuple[int, ...] = (),
) -> tuple[DueCheckin, ...]:
    schedule = build_checkin_schedule(case)
    due = []
    for hour, due_at in zip(case.checkin_hours, schedule):
        if hour not in sent_hours and due_at <= now:
            due.append(
                DueCheckin(
                    case_id=case.case_id,
                    protocol_name=case.protocol_name,
                    hour=hour,
                    due_at=due_at,
                    message=f"Чек-ин {hour}ч: ответьте на вопросы по памятке клиники.",
                )
            )
    return tuple(due)


class ClinicMessageAdapter:
    def __init__(self, catalog: ProtocolCatalog):
        self.catalog = catalog

    def build_initial_message(self, case: CareCase) -> str:
        protocol = self.catalog.get(case.protocol_name)
        return protocol.approved_memo

    def build_questions(self, case: CareCase) -> tuple[str, ...]:
        protocol = self.catalog.get(case.protocol_name)
        return tuple(question.text for question in protocol.questions)

    def handle_checkin_response(
        self,
        case: CareCase,
        *,
        symptoms: dict[str, bool],
        comment: str = "",
        photo_urls: tuple[str, ...] = (),
    ) -> CheckinAdapterResult:
        result = evaluate_checkin(
            case,
            symptoms=symptoms,
            comment=comment,
            photo_urls=photo_urls,
        )
        escalation = (
            create_escalation(result, checkin_comment=comment, photo_urls=photo_urls)
            if result.has_red_flags
            else None
        )
        return CheckinAdapterResult(checkin=result, escalation=escalation)

