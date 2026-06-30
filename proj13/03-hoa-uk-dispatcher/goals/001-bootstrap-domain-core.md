# Goal 001: Bootstrap Domain Core

Status: Done

## Outcome

Есть минимальное ядро ЖКХ-заявки:

- создание заявки жильца;
- номер заявки;
- назначение исполнителя;
- статусы;
- закрытие с фото результата;
- прием показаний счетчиков;
- массовое уведомление.

## Acceptance Criteria

- Доменная логика не зависит от Telegram и веб-фреймворка. Done.
- Есть unittest-тесты на заявку, назначение, закрытие и показания. Done.
- Статусы можно показывать жильцу. Done.

## Verification

`py -m unittest discover -s tests` - OK, 2 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 001`.
