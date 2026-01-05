# Быстрая инструкция: Где добавить секреты в Supabase

## Проблема: "Не вижу где добавить секреты"

Секреты находятся **НЕ в самих функциях**, а в **настройках проекта**!

## Пошаговая инструкция:

### Шаг 1: Открой настройки проекта
1. В Supabase Dashboard в **левом меню** найди иконку **⚙️ Settings** (внизу)
2. Нажми на неё

### Шаг 2: Перейди в Edge Functions
1. В меню слева найди раздел **"Edge Functions"**
2. Нажми на него

### Шаг 3: Найди раздел Secrets
1. Прокрути страницу вниз
2. Найди раздел **"Secrets"** или **"Environment Variables"**
3. Там будет кнопка **"Add new secret"** или **"New secret"**

### Шаг 4: Добавь секреты

Нажми "Add new secret" и добавь два секрета:

**1. STRIPE_SECRET_KEY**
- Name: `STRIPE_SECRET_KEY`
- Value: твой секретный ключ из Stripe (начинается с `sk_test_...`)
- Где взять: Stripe Dashboard → Developers → API keys → Secret key

**2. STRIPE_WEBHOOK_SECRET**
- Name: `STRIPE_WEBHOOK_SECRET`  
- Value: webhook secret из Stripe (начинается с `whsec_...`)
- Где взять: Stripe Dashboard → Developers → Webhooks → выбери endpoint → Signing secret

### Шаг 5: Сохрани
После добавления каждого секрета нажми "Add secret" или "Save"

---

## Визуальный путь:

```
Supabase Dashboard
  └─ ⚙️ Project Settings (внизу слева)
      └─ Edge Functions (в меню слева)
          └─ Secrets (прокрути вниз)
              └─ Add new secret
```

---

## Если не видишь раздел Secrets:

1. Убедись, что ты в правильном проекте
2. Проверь, что у тебя есть права администратора проекта
3. Попробуй обновить страницу (F5)
4. Альтернативный путь: Project Settings → API → Environment Variables (если есть)

---

## Проверка:

После добавления секретов они должны появиться в списке. Функции автоматически получат к ним доступ через `Deno.env.get("STRIPE_SECRET_KEY")`.

