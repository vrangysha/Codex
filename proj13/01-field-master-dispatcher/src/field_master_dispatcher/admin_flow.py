"""Admin and master workflow helpers for field service dispatching."""

from dataclasses import dataclass
from typing import Iterable

from .workflow import (
    ServiceRequest,
    ServiceStatus,
    assign_master,
    build_client_status_message,
    move_status,
)


@dataclass(frozen=True)
class MasterProfile:
    name: str
    contact: str
    districts: tuple[str, ...] = ()
    services: tuple[str, ...] = ()


@dataclass(frozen=True)
class Notification:
    recipient: str
    message: str
    payload: dict[str, str]


def filter_requests(
    requests: Iterable[ServiceRequest],
    *,
    status: ServiceStatus | None = None,
    district: str | None = None,
) -> tuple[ServiceRequest, ...]:
    result = tuple(requests)
    if status is not None:
        result = tuple(request for request in result if request.status == status)
    if district is not None:
        normalized = district.strip().lower()
        result = tuple(request for request in result if request.district.lower() == normalized)
    return result


def assign_request_to_master(
    request: ServiceRequest,
    master: MasterProfile,
) -> tuple[ServiceRequest, tuple[Notification, ...]]:
    updated = assign_master(request, master.name)
    return updated, (
        Notification(
            recipient=master.contact,
            message=build_master_assignment_message(updated),
            payload={"request_id": updated.request_id, "role": "master"},
        ),
        Notification(
            recipient=updated.client_contact,
            message=build_client_status_message(updated),
            payload={"request_id": updated.request_id, "role": "client"},
        ),
    )


def update_from_master(
    request: ServiceRequest,
    status: ServiceStatus,
) -> tuple[ServiceRequest, Notification]:
    updated = move_status(request, status)
    return updated, Notification(
        recipient=updated.client_contact,
        message=build_client_status_message(updated),
        payload={"request_id": updated.request_id, "role": "client"},
    )


def build_master_assignment_message(request: ServiceRequest) -> str:
    card = request.admin_card()
    return (
        f"Новая заявка {card['id']}: {card['service']}, {card['district']}, "
        f"{card['address']}. Срочность: {card['urgency']}."
    )


def dashboard_summary(requests: Iterable[ServiceRequest]) -> dict[str, int]:
    summary = {status.value: 0 for status in ServiceStatus}
    for request in requests:
        summary[request.status.value] += 1
    return summary

