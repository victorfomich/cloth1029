-- ============================================
-- SQL для обновления таблицы orders
-- Добавляет поле customer_phone и делает shipping_address обязательным
-- ============================================
-- Выполни этот код в Supabase Dashboard → SQL Editor

-- Добавляем поле customer_phone если его ещё нет
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'orders' 
        AND column_name = 'customer_phone'
    ) THEN
        ALTER TABLE public.orders ADD COLUMN customer_phone text;
    END IF;
END $$;

-- Делаем shipping_address обязательным (если нужно)
-- Но лучше оставить nullable для обратной совместимости
-- ALTER TABLE public.orders ALTER COLUMN shipping_address SET NOT NULL;

-- Комментарий к полям для документации
COMMENT ON COLUMN public.orders.customer_email IS 'Email покупателя (обязательно)';
COMMENT ON COLUMN public.orders.customer_name IS 'Полное имя покупателя';
COMMENT ON COLUMN public.orders.customer_phone IS 'Телефон покупателя';
COMMENT ON COLUMN public.orders.shipping_address IS 'JSON объект с данными доставки: {country, firstName, lastName, address, apartment, postalCode, city, phone}';
COMMENT ON COLUMN public.orders.items IS 'JSON массив товаров из корзины';

