# Деплой Edge Functions в Supabase

Есть два способа задеплоить Edge Functions:

## Способ 1: Через Supabase Dashboard (РЕКОМЕНДУЕТСЯ - самый простой)

### 1. Создать функцию `create-checkout`

1. Зайди в Supabase Dashboard → Edge Functions
2. Нажми "Create a new function"
3. Имя функции: `create-checkout`
4. Скопируй весь код из файла `supabase/functions/create-checkout/index.ts`
5. Вставь код в редактор
6. Нажми "Deploy"

### 2. Создать функцию `stripe-webhook`

1. Нажми "Create a new function"
2. Имя функции: `stripe-webhook`
3. Скопируй весь код из файла `supabase/functions/stripe-webhook/index.ts`
4. Вставь код в редактор
5. Нажми "Deploy"

### 3. Настроить секреты (ВАЖНО!)

**Секреты находятся НЕ в функциях, а в отдельном разделе Settings!**

1. В левом меню Supabase Dashboard найди раздел **"Project Settings"** (шестерёнка ⚙️ внизу)
2. В меню слева выбери **"Edge Functions"**
3. Прокрути вниз до раздела **"Secrets"**
4. Нажми **"Add new secret"** или **"New secret"**
5. Добавь два секрета:

   **Секрет 1:**
   - Name: `STRIPE_SECRET_KEY`
   - Value: твой секретный ключ из Stripe (начинается с `sk_test_...` или `sk_live_...`)
   - Нажми "Add secret"

   **Секрет 2:**
   - Name: `STRIPE_WEBHOOK_SECRET`
   - Value: webhook secret из Stripe (начинается с `whsec_...`)
   - Нажми "Add secret"

**Где взять ключи:**
- `STRIPE_SECRET_KEY`: Stripe Dashboard → Developers → API keys → Secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe Dashboard → Developers → Webhooks → выбери endpoint → Signing secret

Готово! Функции теперь имеют доступ к секретам.

---

## Способ 2: Через Supabase CLI (если хочешь использовать командную строку)

### 1. Получить Access Token

1. Зайди в Supabase Dashboard → Account Settings → Access Tokens
2. Создай новый токен
3. Скопируй его

### 2. Логин через CLI

```bash
cd "/Users/victor/Desktop/cloth market"
npx supabase login --token ТВОЙ_ТОКЕН
```

### 3. Связать проект

```bash
npx supabase link --project-ref xrlitnxswsiuwntmkmaj
```

### 4. Деплой функций

```bash
npx supabase functions deploy create-checkout
npx supabase functions deploy stripe-webhook
```

### 5. Настроить секреты через CLI

```bash
# Установить секреты
npx supabase secrets set STRIPE_SECRET_KEY=sk_test_твой_ключ
npx supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_твой_секрет
```

---

## Проверка работы функций

После деплоя функции будут доступны по адресам:
- `https://xrlitnxswsiuwntmkmaj.supabase.co/functions/v1/create-checkout`
- `https://xrlitnxswsiuwntmkmaj.supabase.co/functions/v1/stripe-webhook`

