"""Local demo for the HOA/UK dispatcher MVP."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent / "src"))

from hoa_uk_dispatcher.bot_adapter import BotEvent, HoaBotAdapter
from hoa_uk_dispatcher.dispatcher import WorkerProfile
from hoa_uk_dispatcher.storage import HoaRepository


def main() -> None:
    repository = HoaRepository()
    adapter = HoaBotAdapter(repository)
    resident = BotEvent(contact="@olga", name="Olga")

    print(adapter.start_resident_request(resident).message)
    for payload in (
        {"text": "авария"},
        {"text": "House 7"},
        {"text": "2"},
        {"text": "45"},
        {"text": "pipe leak"},
        {"photo_urls": ("photo://before",)},
    ):
        response = adapter.handle_resident_message(BotEvent(contact="@olga", name="Olga", **payload))
        print(response.message)

    ticket = repository.list_tickets()[0]
    print(adapter.dispatcher_assign(ticket_id=ticket.ticket_id, worker=WorkerProfile("Sergey", "@sergey")).message)
    print(adapter.worker_close(ticket_id=ticket.ticket_id, result_photo_urls=("photo://after",)).message)


if __name__ == "__main__":
    main()
