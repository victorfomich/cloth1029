-- ============================================
-- SQL для добавления настроек изображений
-- ============================================
-- Выполни этот код в Supabase Dashboard → SQL Editor

-- Добавляем поле image_settings (JSONB) для хранения настроек изображений
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'products' 
        AND column_name = 'image_settings'
    ) THEN
        ALTER TABLE public.products ADD COLUMN image_settings jsonb;
    END IF;
END $$;

-- Комментарий к полю
COMMENT ON COLUMN public.products.image_settings IS 'Настройки изображений: {main_image_scale: 120, gallery: [{url: "...", scale: 110}, ...]}';

