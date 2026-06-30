"""Small dependency-free workflow core for field service requests."""

from dataclasses import dataclass, field, replace
from datetime import datetime, timezone
from enum import Enum
from uuid import uuid4


class ServiceStatus(str, Enum):
    NEW = "new"
    ACCEPTED = "accepted"
    MASTER_ASSIGNED = "master_assigned"
    ON_THE_WAY = "on_the_way"
    DONE = "done"
    CANCELLED = "cancelled"


@dataclass(frozen=True)
class ServiceRequest:
    request_id: str
    client_name: str
    client_contact: str
    service: str
    address: str
    description: str
    district: str
    urgency: str
    available_windows: tuple[str, ...]
    media_urls: tuple[str, ...] = ()
    appliance_model: str | None = None
    price_hint: str | None = None
    assigned_master: str | None = None
    status: ServiceStatus = ServiceStatus.NEW
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))

    def admin_card(self) -> dict[str, object]:
        return {
            "id": self.request_id,
            "client": self.client_name,
            "contact": self.client_contact,
            "service": self.service,
            "address": self.address,
            "district": self.district,
            "urgency": self.urgency,
            "model": self.appliance_model or "unknown",
            "description": self.description,
            "media_count": len(self.media_urls),
            "status": self.status.value,
            "master": self.assigned_master,
            "price_hint": self.price_hint,
        }


def create_request(
    *,
    client_name: str,
    client_contact: str,
    service: str,
    address: str,
    description: str,
    district: str,
    urgency: str,
    available_windows: tuple[str, ...],
    media_urls: tuple[str, ...] = (),
    appliance_model: str | None = None,
    price_hint: str | None = None,
) -> ServiceRequest:
    required = [client_name, client_contact, service, address, description, district, urgency]
    if any(not item.strip() for item in required):
        raise ValueError("client, service, address, description, district and urgency are required")
    if not available_windows:
        raise ValueError("at least one available time window is required")

    return ServiceRequest(
        request_id=f"FS-{uuid4().hex[:8].upper()}",
        client_name=client_name.strip(),
        client_contact=client_contact.strip(),
        service=service.strip(),
        address=address.strip(),
        description=description.strip(),
        district=district.strip(),
        urgency=urgency.strip(),
        available_windows=tuple(window.strip() for window in available_windows),
        media_urls=tuple(media_urls),
        appliance_model=appliance_model.strip() if appliance_model else None,
        price_hint=price_hint.strip() if price_hint else None,
    )


def assign_master(request: ServiceRequest, master_name: str) -> ServiceRequest:
    if not master_name.strip():
        raise ValueError("master name is required")
    return replace(
        request,
        assigned_master=master_name.strip(),
        status=ServiceStatus.MASTER_ASSIGNED,
    )


def move_status(request: ServiceRequest, status: ServiceStatus) -> ServiceRequest:
    if status in {ServiceStatus.ON_THE_WAY, ServiceStatus.DONE} and not request.assigned_master:
        raise ValueError("master must be assigned before this status")
    return replace(request, status=status)


def build_client_status_message(request: ServiceRequest) -> str:
    labels = {
        ServiceStatus.NEW: "Заявка принята.",
        ServiceStatus.ACCEPTED: "Заявка в работе у диспетчера.",
        ServiceStatus.MASTER_ASSIGNED: f"Назначен мастер: {request.assigned_master}.",
        ServiceStatus.ON_THE_WAY: f"Мастер {request.assigned_master} едет к вам.",
        ServiceStatus.DONE: "Работа отмечена как выполненная. Спасибо!",
        ServiceStatus.CANCELLED: "Заявка отменена.",
    }
    return f"{labels[request.status]} Номер заявки: {request.request_id}"


def export_sheet_row(request: ServiceRequest) -> list[str]:
    return [
        request.request_id,
        request.created_at.isoformat(),
        request.client_name,
        request.client_contact,
        request.service,
        request.address,
        request.district,
        request.urgency,
        request.appliance_model or "",
        request.description,
        ", ".join(request.available_windows),
        str(len(request.media_urls)),
        request.price_hint or "",
        request.assigned_master or "",
        request.status.value,
    ]

