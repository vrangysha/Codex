import unittest

from field_master_dispatcher.intake import (
    IntakeStep,
    build_request,
    record_answer,
    restore_draft,
    start_intake,
)


class FieldMasterIntakeTest(unittest.TestCase):
    def test_full_intake_builds_service_request(self):
        draft = start_intake(client_name="Ivan", client_contact="@ivan")
        answers = [
            {"text": "washer repair"},
            {"text": "Lenina 1"},
            {"text": "does not drain water"},
            {"media_urls": ("photo://1", "video://1")},
            {"text": "today"},
            {"text": "center"},
            {"text": "18:00-21:00, tomorrow morning"},
            {"text": "LG F2J3"},
        ]

        for answer in answers:
            draft = record_answer(draft, **answer)

        request = build_request(draft, price_hint="from 2500 RUB")

        self.assertTrue(draft.is_complete())
        self.assertEqual(request.service, "washer repair")
        self.assertEqual(request.available_windows, ("18:00-21:00", "tomorrow morning"))
        self.assertEqual(request.media_urls, ("photo://1", "video://1"))

    def test_draft_can_be_serialized_and_restored(self):
        draft = start_intake(client_name="Ivan", client_contact="@ivan")
        draft = record_answer(draft, text="washer repair")
        draft = restore_draft(draft.serialize())

        self.assertEqual(draft.current_step, IntakeStep.ADDRESS)
        self.assertEqual(draft.data["service"], "washer repair")


if __name__ == "__main__":
    unittest.main()

