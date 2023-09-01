import { NextResponse } from "next/server";
import { Stripe } from "stripe";
import stripe from "@/app/_lib/stripe/client";
import { updateProductStock } from "@/sanity/lib/updateProductStock";

const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET!;

export async function POST(req: any) {
  const payload = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  let event: Stripe.Event | null = null;

  try {
    event = stripe.webhooks.constructEvent(payload, signature!, webhookSecret);

    const paymentIntent = event.data.object as any;

    if (paymentIntent.status === "complete") {
      const result = await updateProductStock(
        JSON.parse(paymentIntent.metadata.product)
      );

      if (!result) {
        throw new Error(
          "Erreur lors de la mise à jour du stock:",
          paymentIntent.metadata
        );
      } else {
        console.log("Stock mis à jour avec succès.");
      }
    } else {
      console.log(
        "Le paiement n'est pas en statut réussi, aucune action nécessaire."
      );
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }
  return NextResponse.json({ received: true });
}
