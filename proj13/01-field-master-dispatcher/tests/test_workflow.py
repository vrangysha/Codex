import unittest

from field_master_dispatcher.workflow import (
    ServiceStatus,
    assign_master,
    build_client_status_message,
    create_request,
    export_sheet_row,
    move_status,
)


class FieldMasterWorkflowTest(unittest.TestCase):
    def make_request(self):
        return create_request(
            client_name="Ivan",
            client_contact="@ivan",
            service="washer repair",
            address="Lenina 1",
            description="does not drain water",
            district="center",
            urgency="today",
            available_windows=("18:00-21:00",),
            media_urls=("photo://1",),
            appliance_model="LG F2J3",
            price_hint="from 2500 RUB",
        )

    def test_create_admin_card_and_export(self):
        request = self.make_request()

        self.assertEqual(request.status, ServiceStatus.NEW)
        self.assertEqual(request.admin_card()["media_count"], 1)
        self.assertEqual(export_sheet_row(request)[0], request.request_id)

    def test_assign_and_status_message(self):
        request = assign_master(self.make_request(), "Petr")
        request = move_status(request, ServiceStatus.ON_THE_WAY)

        self.assertIn("Petr", build_client_status_message(request))
        self.assertEqual(request.status, ServiceStatus.ON_THE_WAY)


if __name__ == "__main__":
    unittest.main()

