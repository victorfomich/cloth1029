# Настройка Stripe для BRAZKE Store

## Шаг 1: Создать аккаунт Stripe

1. Зайди на [stripe.com](https://stripe.com) и создай аккаунт
2. Перейди в Dashboard → Developers → API keys
3. Скопируй:
   - **Publishable key** (начинается с `pk_test_...` или `pk_live_...`)
   - **Secret key** (начинается с `sk_test_...` или `sk_live_...`)

## Шаг 2: Настроить базу данных в Supabase

1. Зайди в Supabase Dashboard → SQL Editor
2. Выполни SQL код из файла `stripe-setup.sql`
3. Это создаст таблицу `orders` для хранения заказов

## Шаг 3: Создать Edge Functions в Supabase

### 3.1. Установи Supabase CLI (если ещё не установлен)

```bash
npm install -g supabase
```

### 3.2. Логин в Supabase через CLI

```bash
supabase login
```

### 3.3. Свяжи проект с Supabase

```bash
cd "/Users/victor/Desktop/cloth market"
supabase link --project-ref xrlitnxswsiuwntmkmaj
```

### 3.4. Деплой Edge Functions

```bash
# Деплой функции create-checkout
supabase functions deploy create-checkout

# Деплой функции stripe-webhook
supabase functions deploy stripe-webhook
```

## Шаг 4: Настроить переменные окружения в Supabase

1. Зайди в Supabase Dashboard → Project Settings → Edge Functions → Secrets
2. Добавь следующие секреты:

```
STRIPE_SECRET_KEY=sk_test_твой_секретный_ключ
STRIPE_WEBHOOK_SECRET=whsec_твой_webhook_секрет (см. шаг 5)
```

## Шаг 5: Настроить Stripe Webhook

1. В Stripe Dashboard → Developers → Webhooks
2. Нажми "Add endpoint"
3. Endpoint URL: `https://xrlitnxswsiuwntmkmaj.supabase.co/functions/v1/stripe-webhook`
4. Выбери события для отправки:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Скопируй **Signing secret** (начинается с `whsec_...`)
6. Добавь его в Supabase Secrets как `STRIPE_WEBHOOK_SECRET`

## Шаг 6: Обновить код (уже сделано)

- ✅ `index.html` - обновлена функция `checkout()`
- ✅ `success.html` - страница успешной оплаты
- ✅ Edge Functions созданы

## Шаг 7: Тестирование

1. Открой `index.html` в браузере
2. Добавь товары в корзину
3. Нажми "Checkout"
4. Используй тестовую карту Stripe:
   - Номер: `4242 4242 4242 4242`
   - Дата: любая будущая (например, `12/34`)
   - CVC: любые 3 цифры (например, `123`)
   - ZIP: любые 5 цифр (например, `12345`)

## Проверка заказов

После успешной оплаты:
- Заказ появится в таблице `orders` в Supabase
- Статус заказа будет обновлён на `paid` через webhook
- Покупатель получит email от Stripe с чеком

## Переход на Production

Когда будешь готов к реальным платежам:

1. В Stripe Dashboard переключись на **Live mode**
2. Скопируй Live API keys
3. Обнови секреты в Supabase на Live ключи
4. Создай новый webhook endpoint для Live mode
5. Обнови `STRIPE_WEBHOOK_SECRET` в Supabase

## Troubleshooting

### Ошибка "STRIPE_SECRET_KEY is not set"
- Проверь, что секреты добавлены в Supabase Dashboard → Edge Functions → Secrets

### Webhook не работает
- Проверь, что URL webhook правильный: `https://твой-проект.supabase.co/functions/v1/stripe-webhook`
- Убедись, что `STRIPE_WEBHOOK_SECRET` правильный
- Проверь логи в Stripe Dashboard → Webhooks → Endpoint → Logs

### Edge Functions не деплоятся
- Убедись, что Supabase CLI установлен и ты залогинен
- Проверь, что проект правильно связан: `supabase link --project-ref твой-проект-id`

