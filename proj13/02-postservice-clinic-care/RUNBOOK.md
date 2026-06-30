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

1. Approve protocol text with the clinic.
2. Configure message channel: Telegram, WhatsApp or SMS.
3. Load patient/service events from CRM/MIS into `register_case_from_protocol`.
4. Run scheduler to find due check-ins.
5. Send only approved memo/questions from `ClinicMessageAdapter`.
6. Route red flags to `create_escalation`.

## Safety Rules

- Do not generate diagnosis.
- Do not recommend treatment outside clinic-approved memo text.
- Escalate red flags to a human.
- Keep history of escalation actions.

