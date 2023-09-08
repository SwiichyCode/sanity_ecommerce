import { NextResponse, NextRequest } from "next/server";
import stripe from "@/app/_lib/stripe/client";

export async function middleware(request: NextRequest) {
  const parsedUrl = request.nextUrl.searchParams.get("session_id");

  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
  });

  const session = sessions.data.find((session) => session.id === parsedUrl);

  if (session) {
    console.log("valid session");
  } else {
    return NextResponse.redirect(new URL(`/cart`, request.nextUrl).href);
  }
}

export const config = {
  matcher: "/success",
};
