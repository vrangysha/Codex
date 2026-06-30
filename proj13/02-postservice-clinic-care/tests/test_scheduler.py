import unittest
from datetime import timedelta

from postservice_clinic_care.protocols import default_catalog
from postservice_clinic_care.scheduler import ClinicMessageAdapter, due_checkins


class SchedulerAdapterTest(unittest.TestCase):
    def make_case(self):
        return default_catalog().register_case_from_protocol(
            protocol_key="dentistry-implant-day-0",
            client_name="Anna",
            client_contact="@anna",
            service_name="implant surgery",
        )

    def test_due_checkins_skip_sent_hours(self):
        case = self.make_case()
        due = due_checkins(case, now=case.created_at + timedelta(hours=25), sent_hours=(6,))

        self.assertEqual([item.hour for item in due], [24])

    def test_adapter_uses_protocol_text_and_escalates_red_flags(self):
        catalog = default_catalog()
        adapter = ClinicMessageAdapter(catalog)
        case = self.make_case()

        memo = adapter.build_initial_message(case)
        questions = adapter.build_questions(case)
        result = adapter.handle_checkin_response(
            case,
            symptoms={"fever": True},
            comment="temperature",
            photo_urls=("photo://1",),
        )

        self.assertIn("Памятка клиники", memo)
        self.assertIn("Есть температура?", questions)
        self.assertIsNotNone(result.escalation)


if __name__ == "__main__":
    unittest.main()

