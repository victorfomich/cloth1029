-- ============================================
-- SQL для настройки Supabase для BRAZKE Store
-- ============================================
-- Скопируй весь этот код и выполни в Supabase Dashboard → SQL Editor → New Query → Run

-- 1. Создание таблицы products
create table if not exists public.products (
    id          bigserial primary key,
    title       text        not null,
    price       numeric     not null,
    description text,
    main_image  text        not null,
    gallery     text[]      default '{}'::text[],
    sizes       text[]      default '{}'::text[],
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now()
);

-- 2. Триггер для автоматического обновления updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_products_updated_at on public.products;

create trigger set_products_updated_at
before update on public.products
for each row execute function public.set_updated_at();

-- 3. Включаем Row Level Security (RLS)
alter table public.products enable row level security;

-- 4. Политики безопасности (разрешаем всем читать и писать через anon key)
-- Чтение для всех
drop policy if exists "Enable read for all" on public.products;
create policy "Enable read for all"
on public.products
for select
using (true);

-- Запись для всех (INSERT, UPDATE, DELETE)
drop policy if exists "Enable write for all" on public.products;
create policy "Enable write for all"
on public.products
for all
using (true)
with check (true);

-- 5. (ОПЦИОНАЛЬНО) Добавить тестовые товары
-- Раскомментируй блок ниже, если хочешь сразу добавить товары в базу

/*
insert into public.products (title, price, description, main_image, gallery, sizes)
values
(
  'Balenciaga SS24',
  129.99,
  'Идеальная базовая футболка из 100% органического хлопка. Дышащая ткань.',
  'img-1.jpg',
  array['img-1.jpg','img-2.jpg','img-3.jpg'],
  array['XS','S','M','L','XL']
),
(
  'Teal Pocket Tee',
  24.50,
  'Футболка с карманом в цвете морской волны. Стильный дизайн с полосками.',
  'https://via.placeholder.com/600/4F9088/FFFFFF?text=Teal+Front',
  array['https://via.placeholder.com/600/4F9088/FFFFFF?text=Teal+Front'],
  array['S','M','L']
),
(
  'Sunset Graphic Tee',
  29.99,
  'Винтажный принт с закатом на серой ткани. Мягкая текстура.',
  'https://via.placeholder.com/600/6B727A/FFFFFF?text=Grey+Front',
  array['https://via.placeholder.com/600/6B727A/FFFFFF?text=Grey+Front'],
  array['M','L','XL']
),
(
  'Basic Beige Fit',
  18.00,
  'Минимализм во всей красе. Бежевая футболка свободного кроя.',
  'https://via.placeholder.com/600/E5CQA5/FFFFFF?text=Beige+Front',
  array['https://via.placeholder.com/600/E5CQA5/FFFFFF?text=Beige+Front'],
  array['S','M']
);
*/

