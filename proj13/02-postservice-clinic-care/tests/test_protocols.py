import unittest

from postservice_clinic_care.protocols import default_catalog
from postservice_clinic_care.workflow import CareStatus, evaluate_checkin


class ProtocolCatalogTest(unittest.TestCase):
    def test_default_catalog_lists_specialty_protocols(self):
        catalog = default_catalog()
        dentistry = catalog.list_protocols(specialty="dentistry")

        self.assertEqual(len(dentistry), 1)
        self.assertEqual(dentistry[0].key, "dentistry-implant-day-0")
        self.assertIn("fever", dentistry[0].red_flags)

    def test_catalog_registers_case_from_selected_protocol(self):
        catalog = default_catalog()
        case = catalog.register_case_from_protocol(
            protocol_key="vet-surgery-day-0",
            client_name="Mila",
            client_contact="@mila",
            service_name="cat surgery",
        )
        result = evaluate_checkin(case, symptoms={"no_appetite": True})

        self.assertEqual(case.protocol_name, "vet-surgery-day-0")
        self.assertEqual(case.status, CareStatus.MONITORING)
        self.assertTrue(result.has_red_flags)
        self.assertIn("no_appetite", result.matched_flags)


if __name__ == "__main__":
    unittest.main()

