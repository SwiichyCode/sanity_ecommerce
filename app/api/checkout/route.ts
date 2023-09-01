import { NextResponse } from "next/server";
import stripe from "@/app/_lib/stripe/client";

export async function POST(req: any) {
  const body = await req.json();

  if (body.lineItems.length === 0) {
    return new Response(JSON.stringify({ message: "No items in cart" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cart",
      line_items: body.lineItems,

      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["FR"],
      },
      metadata: {
        product: JSON.stringify(
          body.lineItems.map((item: any) => {
            return {
              id: item.price_data.product_data.metadata.productId,
              quantity: item.quantity,
            };
          })
        ),
        userId: body.userId,
      },

      shipping_options: [
        {
          shipping_rate: "shr_1NcWgbJSkUmCv6RblV8PrBLR",
        },
      ],
    });

    return NextResponse.json({ session });
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
