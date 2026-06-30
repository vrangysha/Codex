import unittest

from hoa_uk_dispatcher.bot_adapter import BotEvent, HoaBotAdapter
from hoa_uk_dispatcher.dispatcher import WorkerProfile
from hoa_uk_dispatcher.storage import HoaRepository
from hoa_uk_dispatcher.workflow import TicketStatus


class HoaBotAdapterTest(unittest.TestCase):
    def test_resident_dispatcher_worker_flow(self):
        repo = HoaRepository()
        adapter = HoaBotAdapter(repo)
        event = BotEvent(contact="@olga", name="Olga")

        response = adapter.start_resident_request(event)
        self.assertIn("тип обращения", response.message)

        for payload in (
            {"text": "авария"},
            {"text": "House 7"},
            {"text": "2"},
            {"text": "45"},
            {"text": "pipe leak"},
            {"photo_urls": ("photo://before",)},
        ):
            response = adapter.handle_resident_message(BotEvent(contact="@olga", name="Olga", **payload))

        self.assertIsNotNone(response.ticket)
        ticket_id = response.ticket.ticket_id

        assigned = adapter.dispatcher_assign(
            ticket_id=ticket_id,
            worker=WorkerProfile(name="Sergey", contact="@sergey"),
        )
        closed = adapter.worker_close(ticket_id=ticket_id, result_photo_urls=("photo://after",))

        self.assertEqual(assigned.ticket.worker, "Sergey")
        self.assertEqual(closed.ticket.status, TicketStatus.CLOSED)


if __name__ == "__main__":
    unittest.main()

