# Runbook

## Local Demo

```bash
$env:PYTHONPATH='src'
py demo.py
```

## Test

```bash
$env:PYTHONPATH='src'
py -m unittest discover -s tests
```

## Deployment Steps

1. Configure Telegram bot token in the real adapter layer.
2. Replace `FieldRepository` with SQLite/PostgreSQL implementation.
3. Map Telegram messages to `TelegramEvent`.
4. Map created `ServiceRequest` records to Google Sheets/CRM exports.
5. Route admin/master actions through `admin_flow.py`.

## Operations

- Check unassigned requests first: `ServiceStatus.NEW`.
- Monitor stale assigned requests that did not move to `ON_THE_WAY`.
- Keep price hints as preliminary estimates, not final offers.

