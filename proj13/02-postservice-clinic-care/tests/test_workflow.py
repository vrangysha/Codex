import unittest

from postservice_clinic_care.workflow import (
    CareStatus,
    build_checkin_schedule,
    evaluate_checkin,
    register_case,
)


class PostserviceWorkflowTest(unittest.TestCase):
    def make_case(self):
        return register_case(
            client_name="Anna",
            client_contact="@anna",
            service_name="implant surgery",
            protocol_name="implant-day-0",
            approved_memo="Follow the clinic-approved memo.",
            checkin_hours=(6, 24, 72),
            red_flags=("fever", "heavy_bleeding"),
        )

    def test_schedule_is_created(self):
        case = self.make_case()
        schedule = build_checkin_schedule(case)

        self.assertEqual(case.status, CareStatus.MONITORING)
        self.assertEqual(len(schedule), 3)
        self.assertLess(schedule[0], schedule[1])

    def test_red_flag_escalates(self):
        result = evaluate_checkin(
            self.make_case(),
            symptoms={"fever": True, "heavy_bleeding": False},
        )

        self.assertTrue(result.has_red_flags)
        self.assertEqual(result.case.status, CareStatus.ESCALATED)
        self.assertIn("fever", result.escalation_message)


if __name__ == "__main__":
    unittest.main()

