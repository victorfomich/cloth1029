// Supabase Edge Function для обработки Stripe Webhook
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

const stripe = new Stripe(stripeSecretKey!, {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");

  if (!signature || !stripeWebhookSecret) {
    return new Response("Webhook secret not configured", { status: 400 });
  }

  try {
    const body = await req.text();
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      stripeWebhookSecret
    );

    // Инициализируем Supabase клиент
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "" // Используем service role для обновления заказов
    );

    // Обрабатываем событие checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Обновляем заказ в базе данных
      const { error } = await supabaseClient
        .from("orders")
        .update({
          status: "paid",
          stripe_payment_intent_id: session.payment_intent as string,
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_session_id", session.id);

      if (error) {
        console.error("Error updating order:", error);
        return new Response(
          JSON.stringify({ error: "Failed to update order" }),
          { status: 500 }
        );
      }

      return new Response(
        JSON.stringify({ received: true, orderUpdated: true }),
        { status: 200 }
      );
    }

    // Обрабатываем другие события (payment_intent.succeeded, payment_intent.payment_failed и т.д.)
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Можно обновить заказ по payment_intent_id, если нужно
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 400 }
    );
  }
});

