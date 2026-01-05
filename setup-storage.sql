-- ============================================
-- SQL для настройки Supabase Storage для изображений
-- ============================================
-- Выполни этот код в Supabase Dashboard → SQL Editor

-- Создаём bucket для хранения изображений товаров
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

-- Политики для чтения (всем разрешено читать)
create policy "Public Access"
on storage.objects for select
using (bucket_id = 'product-images');

-- Политики для загрузки (всем разрешено загружать через anon key)
create policy "Public Upload"
on storage.objects for insert
with check (bucket_id = 'product-images');

-- Политики для удаления (всем разрешено удалять через anon key)
create policy "Public Delete"
on storage.objects for delete
using (bucket_id = 'product-images');

-- Политики для обновления (всем разрешено обновлять через anon key)
create policy "Public Update"
on storage.objects for update
using (bucket_id = 'product-images');

