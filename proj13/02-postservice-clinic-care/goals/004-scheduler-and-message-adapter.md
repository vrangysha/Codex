# Goal 004: Scheduler And Message Adapter

Status: Done

## Outcome

Есть планировщик чек-инов и message adapter, который отправляет утвержденные памятки/вопросы и передает красные флаги в очередь эскалаций.

## Acceptance Criteria

- Планировщик возвращает due-события по `CareCase` и текущему времени. Done.
- Adapter формирует только утвержденные сообщения из протокола, без медицинской генерации. Done.
- Ответы чек-ина проходят через `evaluate_checkin`. Done.
- Красные флаги создают `EscalationTicket`. Done.
- Есть unittest-тесты на due-события, обычный ответ и эскалацию. Done.

## Verification

`py -m unittest discover -s tests` - OK, 8 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 004`.
