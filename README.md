# JobSearch

React + TypeScript + Redux Toolkit + React Final Form, сборка — Vite.
Архитектура — [Feature-Sliced Design](https://feature-sliced.design).

## Скрипты

- `npm run dev` — dev-сервер
- `npm run build` — проверка типов и production-сборка
- `npm run typecheck` — проверка типов
- `npm run lint` — oxlint

## Структура

```
src/
  app/        # точка входа, store, провайдеры, глобальные стили
  pages/      # user-profile — страница со списком пользователей
  widgets/    # header — шапка с гирляндой и переключателем темы
  features/   # edit-user-profile — форма добавления пользователя
              # toggle-theme — светлая/тёмная тема (slice, переключатель, синхронизация с <html>)
  entities/   # user — список пользователей (entity adapter), таблица пользователей
  shared/     # ui-kit: Button, TextField, Snowfall; lib: shuffle; config: тип темы и ключ localStorage
```

Слой может импортировать только из слоёв ниже себя; слайсы импортируются через публичный `index.ts`.
