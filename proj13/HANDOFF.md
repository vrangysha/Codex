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
   - Следующая цель: `goals/004-persistence-and-telegram-adapter.md`
   - Статус: доменная модель, intake flow и admin/master flow реализованы и покрыты тестами.

2. `02-postservice-clinic-care`
   - Завершенная цель: `goals/001-bootstrap-domain-core.md`
   - Завершенная цель: `goals/002-protocol-catalog.md`
   - Завершенная цель: `goals/003-admin-escalation-panel.md`
   - Следующая цель: `goals/004-scheduler-and-message-adapter.md`
   - Статус: модель наблюдения, протоколы и очередь эскалаций реализованы и покрыты тестами.

3. `03-hoa-uk-dispatcher`
   - Завершенная цель: `goals/001-bootstrap-domain-core.md`
   - Завершенная цель: `goals/002-resident-bot-flow.md`
   - Завершенная цель: `goals/003-dispatcher-panel-and-meter-readings.md`
   - Следующая цель: `goals/004-storage-and-bot-adapter.md`
   - Статус: модель заявок, resident flow и dispatcher/meter flow реализованы и покрыты тестами.

## Проверка

- `01-field-master-dispatcher`: `py -m unittest discover -s tests` - OK, 6 tests.
- `02-postservice-clinic-care`: `py -m unittest discover -s tests` - OK, 6 tests.
- `03-hoa-uk-dispatcher`: `py -m unittest discover -s tests` - OK, 6 tests.

## Процесс подхвата целей

Перед продолжением работы:

1. Просмотреть `proj13/*/goals/*.md`.
2. Найти новые цели со статусом `New` или `Ready`.
3. Обновить соответствующий `HANDOFF.md`.
4. Взять самую раннюю цель без блокеров.
5. После выполнения обновить goal-файл, prompt-файл при необходимости и handoff.

Последний просмотр папок целей: 2026-06-30. Новых внешних целей не найдено; созданы и подхвачены следующие готовые цели: Field Goal 004, Clinic Goal 004, HOA/UK Goal 004.
