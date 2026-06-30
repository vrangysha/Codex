# Goal 004: Scheduler And Message Adapter

Status: Ready

## Outcome

Есть планировщик чек-инов и message adapter, который отправляет утвержденные памятки/вопросы и передает красные флаги в очередь эскалаций.

## Acceptance Criteria

- Планировщик возвращает due-события по `CareCase` и текущему времени.
- Adapter формирует только утвержденные сообщения из протокола, без медицинской генерации.
- Ответы чек-ина проходят через `evaluate_checkin`.
- Красные флаги создают `EscalationTicket`.
- Есть unittest-тесты на due-события, обычный ответ и эскалацию.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 004`.

