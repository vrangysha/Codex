# Goal 004: Storage And Bot Adapter

Status: Done

## Outcome

Есть минимальное хранилище заявок/показаний и bot adapter для ролей `житель`, `диспетчер`, `исполнитель`.

## Acceptance Criteria

- Resident draft сохраняется и восстанавливается по `resident_contact`. Done.
- Заявки, показания и broadcast audit сохраняются в repository-слое. Done.
- Adapter вызывает resident/dispatcher flow, не содержит бизнес-логики. Done.
- Есть тесты на создание заявки жильцом, назначение диспетчером и закрытие исполнителем. Done.

## Verification

`py -m unittest discover -s tests` - OK, 7 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 004`.
