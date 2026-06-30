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

1. Configure messenger channel.
2. Replace `HoaRepository` with SQLite/PostgreSQL implementation.
3. Register resident, dispatcher and worker roles.
4. Route resident messages to `HoaBotAdapter`.
5. Route dispatcher actions to `dispatcher_assign`.
6. Route worker close actions to `worker_close`.

## Operations

- Prioritize tickets with `priority = emergency`.
- Require result photo before closing tickets.
- Keep broadcast audit for every mass notification.
- Keep meter readings by period and apartment.

