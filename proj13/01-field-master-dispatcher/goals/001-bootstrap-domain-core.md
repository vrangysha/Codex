# Goal 001: Bootstrap Domain Core

Status: Done

## Outcome

Есть минимальное ядро заявки:

- создание заявки;
- карточка для администратора;
- назначение мастера;
- смена статусов;
- экспорт строки для таблицы/CRM.

## Acceptance Criteria

- Доменная логика работает без Telegram и без веб-фреймворка. Done.
- Есть unittest-тесты на создание, назначение и экспорт. Done.
- Код можно переиспользовать в будущем Telegram-боте и админке. Done.

## Verification

`py -m unittest discover -s tests` - OK, 2 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 001`.
