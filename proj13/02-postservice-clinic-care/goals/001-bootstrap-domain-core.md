# Goal 001: Bootstrap Domain Core

Status: Done

## Outcome

Есть минимальное ядро постсервисного наблюдения:

- регистрация кейса после услуги;
- расписание чек-инов;
- сбор состояния;
- определение красных флагов;
- эскалация врачу/администратору.

## Acceptance Criteria

- Код не выдает медицинских советов. Done.
- Красные флаги возвращают событие эскалации. Done.
- Есть unittest-тесты на расписание и эскалацию. Done.

## Verification

`py -m unittest discover -s tests` - OK, 2 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 001`.
