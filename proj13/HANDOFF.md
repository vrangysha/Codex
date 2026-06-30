# Handoff: proj13

Дата: 2026-06-30

## Статус

Создана локальная структура `proj13` с тремя отдельными проектами. Для каждого проекта заведены ревью, цели, промпты, handoff и стартовая реализация доменного ядра на Python.

## GitHub

Целевой репозиторий: `vrangysha/Codex`.

Локальный `git`/`gh` в окружении недоступны, поэтому загрузка выполняется через GitHub connector/API. Создана ветка `codex/add-proj13-bots` от `main`; папка `proj13` подготовлена для публикации в этой ветке и draft PR.

Draft PR: `https://github.com/vrangysha/Codex/pull/1`.

## Проекты

1. `01-field-master-dispatcher`
   - Завершенная цель: `goals/001-bootstrap-domain-core.md`
   - Завершенная цель: `goals/002-build-telegram-intake.md`
   - Завершенная цель: `goals/003-admin-panel-and-master-flow.md`
   - Завершенная цель: `goals/004-persistence-and-telegram-adapter.md`
   - Завершенная цель: `goals/005-delivery-package.md`
   - Статус: MVP package complete. Доменная модель, intake flow, admin/master flow, storage, Telegram adapter и delivery-документы готовы.

2. `02-postservice-clinic-care`
   - Завершенная цель: `goals/001-bootstrap-domain-core.md`
   - Завершенная цель: `goals/002-protocol-catalog.md`
   - Завершенная цель: `goals/003-admin-escalation-panel.md`
   - Завершенная цель: `goals/004-scheduler-and-message-adapter.md`
   - Завершенная цель: `goals/005-delivery-package.md`
   - Статус: MVP package complete. Модель наблюдения, протоколы, очередь эскалаций, scheduler, message adapter и delivery-документы готовы.

3. `03-hoa-uk-dispatcher`
   - Завершенная цель: `goals/001-bootstrap-domain-core.md`
   - Завершенная цель: `goals/002-resident-bot-flow.md`
   - Завершенная цель: `goals/003-dispatcher-panel-and-meter-readings.md`
   - Завершенная цель: `goals/004-storage-and-bot-adapter.md`
   - Завершенная цель: `goals/005-delivery-package.md`
   - Статус: MVP package complete. Модель заявок, resident flow, dispatcher/meter flow, storage, bot adapter и delivery-документы готовы.

## Проверка

- `01-field-master-dispatcher`: `py -m unittest discover -s tests` - OK, 7 tests.
- `02-postservice-clinic-care`: `py -m unittest discover -s tests` - OK, 8 tests.
- `03-hoa-uk-dispatcher`: `py -m unittest discover -s tests` - OK, 7 tests.
- `01-field-master-dispatcher`: `py demo.py` - OK.
- `02-postservice-clinic-care`: `py demo.py` - OK.
- `03-hoa-uk-dispatcher`: `py demo.py` - OK.

## Процесс подхвата целей

Перед продолжением работы:

1. Просмотреть `proj13/*/goals/*.md`.
2. Найти новые цели со статусом `New` или `Ready`.
3. Обновить соответствующий `HANDOFF.md`.
4. Взять самую раннюю цель без блокеров.
5. После выполнения обновить goal-файл, prompt-файл при необходимости и handoff.

Последний просмотр папок целей: 2026-06-30. Все цели `001`-`005` по трем проектам выполнены. Новых внешних целей не найдено.

## Production Hardening

Следующие шаги уже относятся к боевому внедрению: заменить in-memory repositories на БД, подключить реальные Telegram/WhatsApp/SMS SDK, добавить авторизацию админов, CI, Docker/deploy и реальные CRM/Sheets adapters.
