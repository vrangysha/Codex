# Goal 004: Persistence And Telegram Adapter

Status: Ready

## Outcome

Есть минимальное хранилище черновиков/заявок и тонкий Telegram adapter поверх готовых flow-функций.

## Acceptance Criteria

- Черновики intake flow сохраняются и восстанавливаются по `client_contact`.
- Завершенная заявка сохраняется в repository-слой.
- Telegram adapter не содержит бизнес-логики, только маппинг входящих сообщений в flow-команды.
- Есть тесты на сохранение, восстановление и создание заявки через adapter.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 004`.

