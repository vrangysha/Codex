# Integration Contract

## Telegram Input

Adapter input is `TelegramEvent`:

- `contact`: stable Telegram user/contact id.
- `name`: display name.
- `text`: message text.
- `media_urls`: uploaded photo/video references.

## Request Output

Completed intake creates `ServiceRequest` with:

- `request_id`
- `client_name`
- `client_contact`
- `service`
- `address`
- `description`
- `district`
- `urgency`
- `available_windows`
- `media_urls`
- `appliance_model`
- `status`

## CRM/Google Sheets Export

Use `export_sheet_row(request)` as the stable row contract for Google Sheets, amoCRM, Bitrix24 or CSV export.

## Admin/Master Events

- `assign_request_to_master(request, master)` returns updated request plus master/client notifications.
- `update_from_master(request, status)` returns updated request plus client notification.

