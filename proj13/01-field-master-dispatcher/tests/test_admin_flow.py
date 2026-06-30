import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from field_master_dispatcher.admin_flow import (
    MasterProfile,
    assign_request_to_master,
    dashboard_summary,
    filter_requests,
    update_from_master,
)
from field_master_dispatcher.workflow import ServiceStatus, create_request


class FieldMasterAdminFlowTest(unittest.TestCase):
    def make_request(self, district="center"):
        return create_request(
            client_name="Ivan",
            client_contact="@ivan",
            service="washer repair",
            address="Lenina 1",
            description="does not drain water",
            district=district,
            urgency="today",
            available_windows=("18:00-21:00",),
        )

    def test_filter_assign_and_notify(self):
        request = self.make_request()
        other = self.make_request(district="north")
        queue = filter_requests((request, other), status=ServiceStatus.NEW, district="center")

        assigned, notifications = assign_request_to_master(
            queue[0],
            MasterProfile(name="Petr", contact="@petr", districts=("center",)),
        )

        self.assertEqual(len(queue), 1)
        self.assertEqual(assigned.status, ServiceStatus.MASTER_ASSIGNED)
        self.assertEqual({notice.payload["role"] for notice in notifications}, {"master", "client"})

    def test_master_status_update_and_summary(self):
        assigned, _ = assign_request_to_master(
            self.make_request(),
            MasterProfile(name="Petr", contact="@petr"),
        )
        on_way, notice = update_from_master(assigned, ServiceStatus.ON_THE_WAY)
        summary = dashboard_summary((assigned, on_way))

        self.assertEqual(on_way.status, ServiceStatus.ON_THE_WAY)
        self.assertIn("едет", notice.message)
        self.assertEqual(summary[ServiceStatus.MASTER_ASSIGNED.value], 1)


if __name__ == "__main__":
    unittest.main()
