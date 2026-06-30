# Integration Contract

## CRM/MIS Input

Create a care case with:

- `client_name`
- `client_contact`
- `service_name`
- `protocol_key`
- optional `control_visit_at`

## Message Output

Only these sources are valid for outbound messages:

- `CareProtocol.approved_memo`
- `CareProtocol.questions`
- `DueCheckin.message`

## Check-In Input

Check-in answer is:

- `symptoms`: `dict[str, bool]`
- `comment`: free text
- `photo_urls`: optional media references

## Escalation Output

Red flags create `EscalationTicket`:

- `escalation_id`
- `case_id`
- `matched_flags`
- `status`
- `history`

