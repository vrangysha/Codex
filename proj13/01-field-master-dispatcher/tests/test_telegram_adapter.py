import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from field_master_dispatcher.storage import FieldRepository
from field_master_dispatcher.telegram_adapter import FieldTelegramAdapter, TelegramEvent


class FieldTelegramAdapterTest(unittest.TestCase):
    def test_adapter_persists_draft_and_creates_request(self):
        repo = FieldRepository()
        adapter = FieldTelegramAdapter(repo)
        event = TelegramEvent(contact="@ivan", name="Ivan")

        response = adapter.start(event)
        self.assertIn("услуга", response.message)
        self.assertIsNotNone(repo.get_draft("@ivan"))

        for payload in (
            {"text": "washer repair"},
            {"text": "Lenina 1"},
            {"text": "does not drain water"},
            {"media_urls": ("photo://1",)},
            {"text": "today"},
            {"text": "center"},
            {"text": "18:00-21:00"},
            {"text": "LG F2J3"},
        ):
            response = adapter.handle_message(TelegramEvent(contact="@ivan", name="Ivan", **payload))

        self.assertIsNotNone(response.request)
        self.assertIsNone(repo.get_draft("@ivan"))
        self.assertEqual(len(repo.list_requests()), 1)


if __name__ == "__main__":
    unittest.main()
