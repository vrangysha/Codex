import unittest

from hoa_uk_dispatcher.workflow import (
    TicketStatus,
    assign_worker,
    build_broadcast,
    build_resident_status_message,
    close_ticket,
    create_ticket,
    record_meter_reading,
)


class HoaWorkflowTest(unittest.TestCase):
    def make_ticket(self):
        return create_ticket(
            resident_name="Olga",
            resident_contact="@olga",
            category="plumbing",
            building="House 7",
            entrance="2",
            apartment="45",
            comment="pipe leak",
            photo_urls=("photo://before",),
        )

    def test_create_assign_and_close_ticket(self):
        ticket = self.make_ticket()
        ticket = assign_worker(ticket, "Sergey")
        ticket = close_ticket(ticket, ("photo://after",))

        self.assertEqual(ticket.status, TicketStatus.CLOSED)
        self.assertIn("Номер заявки", build_resident_status_message(ticket))

    def test_meter_reading_and_broadcast(self):
        reading = record_meter_reading(
            resident_contact="@olga",
            building="House 7",
            apartment="45",
            meter_type="water",
            value="123.4",
            period="2026-06",
        )
        broadcast = build_broadcast("water outage", "No water from 10 to 12", "House 7")

        self.assertEqual(reading.period, "2026-06")
        self.assertEqual(broadcast["target"], "House 7")


if __name__ == "__main__":
    unittest.main()

