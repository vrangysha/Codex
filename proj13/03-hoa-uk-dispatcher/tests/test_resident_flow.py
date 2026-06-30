import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from hoa_uk_dispatcher.resident_flow import (
    ResidentStep,
    build_ticket,
    list_open_tickets,
    record_answer,
    restore_draft,
    start_resident_ticket,
)
from hoa_uk_dispatcher.workflow import assign_worker, close_ticket


class ResidentFlowTest(unittest.TestCase):
    def test_resident_flow_builds_emergency_ticket(self):
        draft = start_resident_ticket(resident_name="Olga", resident_contact="@olga")
        answers = [
            {"text": "авария"},
            {"text": "House 7"},
            {"text": "2"},
            {"text": "45"},
            {"text": "pipe leak"},
            {"photo_urls": ("photo://before",)},
        ]

        for answer in answers:
            draft = record_answer(draft, **answer)

        ticket = build_ticket(draft)

        self.assertTrue(draft.is_complete())
        self.assertEqual(ticket.priority, "emergency")
        self.assertEqual(ticket.photo_urls, ("photo://before",))

    def test_draft_restore_and_open_ticket_list(self):
        draft = start_resident_ticket(resident_name="Olga", resident_contact="@olga")
        draft = record_answer(draft, text="plumbing")
        draft = restore_draft(draft.serialize())

        self.assertEqual(draft.current_step, ResidentStep.BUILDING)

        open_ticket = build_ticket(
            record_answer(
                record_answer(
                    record_answer(
                        record_answer(
                            record_answer(draft, text="House 7"),
                            text="2",
                        ),
                        text="45",
                    ),
                    text="pipe leak",
                ),
                photo_urls=("photo://before",),
            )
        )
        closed_ticket = close_ticket(assign_worker(open_ticket, "Sergey"), ("photo://after",))

        self.assertEqual(list_open_tickets((open_ticket, closed_ticket), resident_contact="@olga"), (open_ticket,))


if __name__ == "__main__":
    unittest.main()
