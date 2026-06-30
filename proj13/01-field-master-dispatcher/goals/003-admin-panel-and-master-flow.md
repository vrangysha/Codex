# Goal 003: Admin Panel And Master Flow

Status: Done

## Outcome

Администратор видит очередь заявок, назначает мастера, мастер получает карточку и меняет статусы.

## Acceptance Criteria

- Есть список заявок с фильтрами по статусу и району. Done.
- Назначение мастера меняет статус и создает уведомление. Done.
- Клиент получает статусы `принято`, `мастер назначен`, `едет`, `выполнено`. Done.

## Verification

`py -m unittest discover -s tests` - OK, 6 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 003`.

