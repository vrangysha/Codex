# Goal 004: Persistence And Telegram Adapter

Status: Done

## Outcome

Есть минимальное хранилище черновиков/заявок и тонкий Telegram adapter поверх готовых flow-функций.

## Acceptance Criteria

- Черновики intake flow сохраняются и восстанавливаются по `client_contact`. Done.
- Завершенная заявка сохраняется в repository-слой. Done.
- Telegram adapter не содержит бизнес-логики, только маппинг входящих сообщений в flow-команды. Done.
- Есть тесты на сохранение, восстановление и создание заявки через adapter. Done.

## Verification

`py -m unittest discover -s tests` - OK, 7 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 004`.
