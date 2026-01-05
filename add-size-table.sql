-- ============================================
-- SQL для добавления таблицы размеров в products
-- ============================================
-- Выполни этот код в Supabase Dashboard → SQL Editor

-- Добавляем поле size_table (JSONB) для хранения таблицы размеров
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'products' 
        AND column_name = 'size_table'
    ) THEN
        ALTER TABLE public.products ADD COLUMN size_table jsonb;
    END IF;
END $$;

-- Комментарий к полю
COMMENT ON COLUMN public.products.size_table IS 'Таблица размеров в формате JSON: {headers: ["Размер", "US", "FR", "UK", "JP"], rows: [["XXS", "0", "32", "4", "26-27"], ...]}';

