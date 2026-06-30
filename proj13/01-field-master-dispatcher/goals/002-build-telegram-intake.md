# Goal 002: Build Telegram Intake Flow

Status: Done

## Outcome

Telegram-бот принимает заявку по шагам: услуга, адрес, описание, фото/видео, срочность, район, доступное время, модель техники.

## Acceptance Criteria

- Диалог можно пройти без администратора. Done.
- Неполная заявка не теряется и может быть продолжена. Done.
- После завершения создается доменная заявка из Goal 001. Done.

## Verification

`py -m unittest discover -s tests` - OK, 4 tests.

## Prompt

См. `prompts/goal-prompts.md`, раздел `Goal 002`.

