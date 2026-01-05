// Supabase Edge Function для создания Stripe Checkout Session
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Получаем данные из запроса
    const { items, customerEmail, customerName, successUrl, cancelUrl, shippingAddress } =
      await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error("Items array is required");
    }

    // Инициализируем Supabase клиент
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    // Получаем Stripe секретный ключ из переменных окружения
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }

    // Вычисляем общую сумму
    const totalAmount = items.reduce(
      (sum: number, item: any) => sum + item.price * (item.quantity || 1),
      0
    );

    // Создаём заказ в базе данных (со статусом pending)
    // Сохраняем все данные из формы: email, имя, телефон, адрес доставки
    const { data: order, error: orderError } = await supabaseClient
      .from("orders")
      .insert({
        customer_email: customerEmail,
        customer_name: customerName,
        customer_phone: shippingAddress?.phone || null,
        total_amount: totalAmount,
        status: "pending",
        items: items,
        shipping_address: shippingAddress || null, // Сохраняем все данные адреса: country, firstName, lastName, address, apartment, postalCode, city, phone
      })
      .select()
      .single();

    if (orderError) {
      throw new Error(`Failed to create order: ${orderError.message}`);
    }

    // Формируем параметры для Stripe Checkout Session
    const params = new URLSearchParams();
    params.append("payment_method_types[]", "card");
    params.append("mode", "payment");
    params.append("success_url", successUrl || `${req.headers.get("origin")}/success.html?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", cancelUrl || `${req.headers.get("origin")}/index.html?canceled=true`);
    if (customerEmail) {
      params.append("customer_email", customerEmail);
    }
    params.append("metadata[order_id]", order.id);

    // Добавляем line_items в правильном формате для Stripe API
    items.forEach((item: any, index: number) => {
      params.append(`line_items[${index}][price_data][currency]`, "usd");
      params.append(`line_items[${index}][price_data][product_data][name]`, item.title);
      if (item.size) {
        params.append(`line_items[${index}][price_data][product_data][description]`, `Size: ${item.size}`);
      }
      if (item.image) {
        params.append(`line_items[${index}][price_data][product_data][images][]`, item.image);
      }
      params.append(`line_items[${index}][price_data][unit_amount]`, Math.round(item.price * 100).toString());
      params.append(`line_items[${index}][quantity]`, (item.quantity || 1).toString());
    });

    // Создаём Stripe Checkout Session
    const stripeResponse = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeSecretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    if (!stripeResponse.ok) {
      const errorText = await stripeResponse.text();
      throw new Error(`Stripe API error: ${errorText}`);
    }

    const session = await stripeResponse.json();

    // Обновляем заказ с stripe_session_id
    await supabaseClient
      .from("orders")
      .update({ stripe_session_id: session.id })
      .eq("id", order.id);

    return new Response(
      JSON.stringify({
        sessionId: session.id,
        url: session.url,
        orderId: order.id,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});

