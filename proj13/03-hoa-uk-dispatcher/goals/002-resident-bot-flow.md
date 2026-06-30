# Goal 002: Resident Bot Flow

Status: Done

## Outcome

Житель создает заявку через бот: тип обращения, дом/подъезд/квартира, комментарий, фото. Бот выдает номер и показывает статусы.

## Acceptance Criteria

- Заявка создается за короткий диалог. Done.
- Житель может посмотреть свои открытые заявки. Done.
- Аварийные обращения помечаются приоритетом. Done.

## Verification

`py -m unittest discover -s tests` - OK, 4 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 002`.

