"""Repository interfaces and in-memory storage for field dispatcher MVP."""

from dataclasses import dataclass, field

from .intake import IntakeDraft
from .workflow import ServiceRequest


@dataclass
class FieldRepository:
    drafts: dict[str, IntakeDraft] = field(default_factory=dict)
    requests: dict[str, ServiceRequest] = field(default_factory=dict)

    def save_draft(self, draft: IntakeDraft) -> None:
        self.drafts[draft.client_contact] = draft

    def get_draft(self, client_contact: str) -> IntakeDraft | None:
        return self.drafts.get(client_contact)

    def delete_draft(self, client_contact: str) -> None:
        self.drafts.pop(client_contact, None)

    def save_request(self, request: ServiceRequest) -> None:
        self.requests[request.request_id] = request

    def get_request(self, request_id: str) -> ServiceRequest | None:
        return self.requests.get(request_id)

    def list_requests(self) -> tuple[ServiceRequest, ...]:
        return tuple(self.requests.values())

