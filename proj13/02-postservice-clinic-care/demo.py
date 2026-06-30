"""Local demo for the postservice clinic care MVP."""

import sys
from datetime import timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent / "src"))

from postservice_clinic_care.protocols import default_catalog
from postservice_clinic_care.scheduler import ClinicMessageAdapter, due_checkins


def main() -> None:
    catalog = default_catalog()
    adapter = ClinicMessageAdapter(catalog)
    case = catalog.register_case_from_protocol(
        protocol_key="dentistry-implant-day-0",
        client_name="Anna",
        client_contact="@anna",
        service_name="implant surgery",
    )

    print(adapter.build_initial_message(case))
    print("questions:")
    for question in adapter.build_questions(case):
        print(f"- {question}")

    due = due_checkins(case, now=case.created_at + timedelta(hours=7))
    for item in due:
        print(f"due {item.hour}h: {item.message}")

    result = adapter.handle_checkin_response(
        case,
        symptoms={"fever": True},
        comment="temperature is high",
        photo_urls=("photo://gum",),
    )
    print(f"red flags: {result.checkin.matched_flags}")
    print(f"escalation: {result.escalation.escalation_id if result.escalation else 'none'}")


if __name__ == "__main__":
    main()
