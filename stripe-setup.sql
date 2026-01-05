-- ============================================
-- SQL для настройки Stripe оплаты в Supabase
-- ============================================
-- Выполни этот код в Supabase Dashboard → SQL Editor

-- 1. Таблица orders (заказы)
create table if not exists public.orders (
    id              uuid primary key default gen_random_uuid(),
    stripe_session_id text unique,
    stripe_payment_intent_id text,
    customer_email   text,
    customer_name    text,
    total_amount     numeric not null,
    currency         text default 'usd',
    status           text default 'pending', -- pending, paid, failed, cancelled
    items            jsonb not null, -- массив товаров из корзины
    shipping_address jsonb,
    created_at       timestamptz not null default now(),
    updated_at       timestamptz not null default now()
);

-- 2. Индекс для быстрого поиска по stripe_session_id
create index if not exists idx_orders_stripe_session on public.orders(stripe_session_id);
create index if not exists idx_orders_status on public.orders(status);

-- 3. Триггер для updated_at
drop trigger if exists set_orders_updated_at on public.orders;
create trigger set_orders_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

-- 4. Включаем RLS
alter table public.orders enable row level security;

-- 5. Политики безопасности
-- Разрешаем создавать заказы всем (через Edge Function)
drop policy if exists "Enable insert for all" on public.orders;
create policy "Enable insert for all"
on public.orders
for insert
with check (true);

-- Разрешаем читать заказы всем (можно ограничить позже по email)
drop policy if exists "Enable read for all" on public.orders;
create policy "Enable read for all"
on public.orders
for select
using (true);

-- Разрешаем обновлять заказы (для webhook)
drop policy if exists "Enable update for all" on public.orders;
create policy "Enable update for all"
on public.orders
for update
using (true)
with check (true);

