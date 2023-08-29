import { NextResponse } from "next/server";
import { buffer } from "node:stream/consumers";
import stripe from "@/app/_services/stripe/client";
import { handlePaymentSuccessWebhook } from "@/app/_services/stripe/handlePaymentSuccesWebhook";

export async function POST(req: any) {
  const rawBody = await buffer(req.body);
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      req.headers["stripe-signature"] as string,
      process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET as string
    );

    console.log(event);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Webhook signature verification failed",
      },
      {
        status: 400,
      }
    );
  }

  handlePaymentSuccessWebhook(event);
  // have to return response promptly, ie without waiting for back-end process or stripe will potentially flag your account
  // handleWebhook(event);
  return NextResponse.json(
    { message: "successfully received" },
    { status: 200 }
  );
}
