"""Local demo for the field master dispatcher MVP."""

from field_master_dispatcher.admin_flow import MasterProfile, assign_request_to_master
from field_master_dispatcher.storage import FieldRepository
from field_master_dispatcher.telegram_adapter import FieldTelegramAdapter, TelegramEvent
from field_master_dispatcher.workflow import ServiceStatus


def main() -> None:
    repository = FieldRepository()
    adapter = FieldTelegramAdapter(repository)
    client = TelegramEvent(contact="@ivan", name="Ivan")

    print(adapter.start(client).message)
    for payload in (
        {"text": "washer repair"},
        {"text": "Lenina 1"},
        {"text": "does not drain water"},
        {"media_urls": ("photo://washer",)},
        {"text": "today"},
        {"text": "center"},
        {"text": "18:00-21:00"},
        {"text": "LG F2J3"},
    ):
        response = adapter.handle_message(TelegramEvent(contact="@ivan", name="Ivan", **payload))
        print(response.message)

    request = repository.list_requests()[0]
    assigned, notifications = assign_request_to_master(
        request,
        MasterProfile(name="Petr", contact="@petr", districts=("center",)),
    )

    print(f"admin: assigned {assigned.request_id} -> {assigned.assigned_master}")
    print(f"admin: status {ServiceStatus.MASTER_ASSIGNED.value}")
    for notification in notifications:
        print(f"notify {notification.recipient}: {notification.message}")


if __name__ == "__main__":
    main()

