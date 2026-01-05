# BRAZKE Store - Маркетплейс одежды

Маркетплейс одежды с админ-панелью для управления товарами через Supabase.

## Структура проекта

- `index.html` - Главная страница магазина (витрина)
- `admin.html` - Админ-панель для управления товарами
- `supabase-setup.sql` - SQL скрипт для настройки базы данных Supabase
- `img-*.jpg` - Изображения товаров

## Быстрый старт

### 1. Настройка Supabase

1. Зайди на [supabase.com](https://supabase.com) и создай проект
2. В Dashboard → SQL Editor создай новый запрос
3. Скопируй весь код из файла `supabase-setup.sql` и выполни его (Run)
4. В Settings → API скопируй:
   - **Project URL** → это `SUPABASE_URL`
   - **anon public key** → это `SUPABASE_ANON_KEY`
5. Вставь эти значения в `index.html` и `admin.html` (строки с `SUPABASE_URL` и `SUPABASE_ANON_KEY`)

### 2. Локальный запуск

Просто открой `index.html` в браузере или используй локальный сервер:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

### 3. Деплой на Vercel

1. Убедись, что все файлы закоммичены в GitHub
2. Зайди на [vercel.com](https://vercel.com)
3. New Project → Import Git Repository → выбери `victorfomich/cloth1029`
4. Framework Preset: **Other**
5. Build Command: оставь пустым
6. Output Directory: оставь пустым
7. Deploy

После деплоя:
- Витрина: `https://твой-домен.vercel.app/` или `/index.html`
- Админка: `https://твой-домен.vercel.app/admin.html`

## Использование админки

1. Открой `admin.html`
2. Проверь статус подключения к Supabase (должен быть зелёный)
3. Добавь товар через форму или отредактируй существующий
4. Изменения сразу появятся на витрине после обновления страницы

## Технологии

- HTML/CSS/JavaScript (vanilla)
- Supabase (PostgreSQL база данных)
- Vercel (хостинг)

