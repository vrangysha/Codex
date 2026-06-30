# Goal 004: Storage And Bot Adapter

Status: Ready

## Outcome

Есть минимальное хранилище заявок/показаний и bot adapter для ролей `житель`, `диспетчер`, `исполнитель`.

## Acceptance Criteria

- Resident draft сохраняется и восстанавливается по `resident_contact`.
- Заявки, показания и broadcast audit сохраняются в repository-слое.
- Adapter вызывает resident/dispatcher flow, не содержит бизнес-логики.
- Есть тесты на создание заявки жильцом, назначение диспетчером и закрытие исполнителем.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 004`.

