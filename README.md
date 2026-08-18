# Мастер Спорта

Цифровая платформа Федерации кикбоксинга России. Текущий этап — адаптивный презентационный лендинг на стеке команды.

## Стек

- Laravel 13 + PHP 8.3+
- Inertia.js
- Vue 3 (Composition API, `<script setup>`) + TypeScript
- Vite + Tailwind CSS
- Lucide Icons

## Запуск

```bash
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
npm install
npm run dev
```

В отдельном терминале:

```bash
php artisan serve
```

Или одной командой:

```bash
composer run dev
```

Откройте [http://127.0.0.1:8000](http://127.0.0.1:8000).

Статическая сборка для GitHub Pages:

```bash
npm run build:pages
```

Сайт публикуется с ветки `main` через GitHub Actions: [https://paymushkin.github.io/master-sporta/](https://paymushkin.github.io/master-sporta/).

Для production-сборки фронтенда Laravel:

```bash
npm run build
```

## Архитектура лендинга

- Страница: `resources/js/pages/Home.vue`
- Секции: `resources/js/sections/`
- UI и продуктовые компоненты: `resources/js/components/`
- Демонстрационные данные: `resources/js/data/`
- Маршрут: `GET /` → `HomeController`
