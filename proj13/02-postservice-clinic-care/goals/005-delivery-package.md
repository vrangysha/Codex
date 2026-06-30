# Goal 005: Delivery Package

Status: Done

## Outcome

Проект оформлен как поставляемый MVP-пакет: demo entrypoint, runbook, интеграционные контракты и инструкция внедрения для клиники.

## Acceptance Criteria

- Есть демонстрационный сценарий, запускаемый локально. Done.
- Есть runbook для внедрения и поддержки. Done.
- Есть integration contract для МИС/CRM/мессенджеров. Done.
- README явно фиксирует медицинское ограничение: бот не лечит и не ставит диагноз. Done.
- Тесты проходят. Done.

## Verification

- `py -m unittest discover -s tests` - OK, 8 tests.
- `py demo.py` - OK.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 005`.
