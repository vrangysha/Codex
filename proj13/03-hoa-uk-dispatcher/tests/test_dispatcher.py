import unittest

from hoa_uk_dispatcher.dispatcher import (
    WorkerProfile,
    assign_ticket_to_worker,
    close_ticket_with_result,
    create_broadcast_audit,
    create_meter_collection_campaign,
    filter_tickets,
    record_campaign_reading,
)
from hoa_uk_dispatcher.resident_flow import build_ticket, record_answer, start_resident_ticket
from hoa_uk_dispatcher.workflow import TicketStatus


class DispatcherPanelTest(unittest.TestCase):
    def make_ticket(self):
        draft = start_resident_ticket(resident_name="Olga", resident_contact="@olga")
        for answer in (
            {"text": "авария"},
            {"text": "House 7"},
            {"text": "2"},
            {"text": "45"},
            {"text": "pipe leak"},
            {"photo_urls": ("photo://before",)},
        ):
            draft = record_answer(draft, **answer)
        return build_ticket(draft)

    def test_filter_assign_and_close_ticket(self):
        ticket = self.make_ticket()
        queue = filter_tickets((ticket,), status=TicketStatus.NEW, priority="emergency")
        assigned, notification = assign_ticket_to_worker(
            queue[0],
            WorkerProfile(name="Sergey", contact="@sergey", categories=("авария",)),
        )
        closed = close_ticket_with_result(assigned, result_photo_urls=("photo://after",))

        self.assertEqual(notification.recipient, "@sergey")
        self.assertEqual(closed.status, TicketStatus.CLOSED)

    def test_meter_campaign_and_broadcast_audit(self):
        campaign = create_meter_collection_campaign(
            period="2026-06",
            target="House 7",
            meter_types=("water", "electricity"),
        )
        reading = record_campaign_reading(
            campaign,
            resident_contact="@olga",
            building="House 7",
            apartment="45",
            meter_type="water",
            value="123.4",
        )
        audit = create_broadcast_audit(
            topic="water outage",
            body="No water from 10 to 12",
            target="House 7",
            created_by="dispatcher",
        )

        self.assertEqual(reading.period, "2026-06")
        self.assertEqual(audit.target, "House 7")


if __name__ == "__main__":
    unittest.main()

