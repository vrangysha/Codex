import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from postservice_clinic_care.escalation import (
    EscalationStatus,
    close_escalation,
    create_escalation,
    filter_escalations,
    take_escalation,
)
from postservice_clinic_care.protocols import default_catalog
from postservice_clinic_care.workflow import evaluate_checkin


class EscalationPanelTest(unittest.TestCase):
    def make_result(self):
        case = default_catalog().register_case_from_protocol(
            protocol_key="dentistry-implant-day-0",
            client_name="Anna",
            client_contact="@anna",
            service_name="implant surgery",
        )
        return evaluate_checkin(case, symptoms={"fever": True})

    def test_create_take_and_close_escalation(self):
        ticket = create_escalation(
            self.make_result(),
            checkin_comment="temperature is high",
            photo_urls=("photo://gum",),
        )
        ticket = take_escalation(ticket, assignee="admin")
        ticket = close_escalation(ticket, actor="admin", resolution="doctor called patient")

        self.assertEqual(ticket.status, EscalationStatus.CLOSED)
        self.assertEqual(ticket.assignee, "admin")
        self.assertEqual([event.action for event in ticket.history], ["created", "taken", "closed"])

    def test_filter_escalation_queue(self):
        ticket = create_escalation(self.make_result())
        taken = take_escalation(ticket, assignee="admin")

        self.assertEqual(filter_escalations((ticket, taken), status=EscalationStatus.NEW), (ticket,))
        self.assertEqual(filter_escalations((ticket, taken), assignee="admin"), (taken,))


if __name__ == "__main__":
    unittest.main()
