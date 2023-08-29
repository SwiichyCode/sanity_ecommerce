import { NextResponse } from "next/server";
import stripe from "@/app/_services/stripe/client";
import { updateProductStock } from "@/sanity/lib/updateProductStock";

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
        id: "test",
        // productId: body.lineItems.map((item: any) => {
        //   return item.price_data.product_data.metadata.productId;
        // }),
        // quantity: body.lineItems.map((item: any) => {
        //   return item.quantity;
        // }),
      },

      shipping_options: [
        {
          shipping_rate: "shr_1NcWgbJSkUmCv6RblV8PrBLR",
        },
      ],
    });

    // console.log(session.payment_intent);

    // if (session.status === "complete") {
    //   const result = await updateProductStock(
    //     body.lineItems.map((item: any) => {
    //       return {
    //         id: item.price_data.product_data.metadata.productId,
    //         quantity: item.quantity,
    //       };
    //     })
    //   );
    // }

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
