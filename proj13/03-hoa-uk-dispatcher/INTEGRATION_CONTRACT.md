# Integration Contract

## Resident Input

Adapter input is `BotEvent`:

- `contact`
- `name`
- `text`
- `photo_urls`

## Ticket Output

Completed resident flow creates `ResidentTicket`:

- `ticket_id`
- `resident_contact`
- `category`
- `building`
- `entrance`
- `apartment`
- `priority`
- `status`

## Dispatcher Actions

- `dispatcher_assign(ticket_id, worker)`
- `worker_close(ticket_id, result_photo_urls)`
- `create_meter_collection_campaign`
- `record_campaign_reading`
- `create_broadcast_audit`

## External Systems

The repository layer is the integration boundary for CRM, Google Sheets, УК systems or CSV export.

