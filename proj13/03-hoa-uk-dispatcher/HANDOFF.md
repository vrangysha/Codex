# Handoff: HOA/UK Dispatcher

Дата: 2026-06-30

## Что сделано

- Проведено первичное ревью идеи: `reviews/001-initial-review.md`.
- Созданы цели в `goals/`.
- Создан список промптов в `prompts/goal-prompts.md`.
- Реализована Goal 001: доменная модель заявки жильца.
- Реализована Goal 002: resident bot flow с сериализацией черновика, приоритетом аварий и просмотром открытых заявок.
- Реализована Goal 003: dispatcher/meter flow, назначение исполнителей, закрытие с фото и аудит рассылок.
- Реализована Goal 004: storage и role-based bot adapter.
- Реализована Goal 005: delivery package, demo, runbook и integration contract.

## Завершенные цели

- `goals/001-bootstrap-domain-core.md` - `Done`
- `goals/002-resident-bot-flow.md` - `Done`
- `goals/003-dispatcher-panel-and-meter-readings.md` - `Done`
- `goals/004-storage-and-bot-adapter.md` - `Done`
- `goals/005-delivery-package.md` - `Done`

## Статус MVP

MVP package complete. Следующий слой - production hardening: реальная БД, messenger SDK, роли/авторизация, CRM/таблицы adapters и deploy.

## Открытые вопросы

- Один дом/ТСЖ в первом релизе или сразу несколько домов?
- Нужна ли модерация жителей по квартире/телефону?
- Показания счетчиков принимаются текстом, фото или оба варианта?
