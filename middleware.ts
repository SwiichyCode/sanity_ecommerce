import { NextResponse, NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import stripe from "@/app/_lib/stripe/client";

export async function middleware(req: NextRequest) {
  // PUBLIC_ROUTES
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  // await supabase.auth.getSession();

  // PRIVATE_ROUTES
  if (req.nextUrl.pathname.startsWith("/profil")) {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      return res;
    }

    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/signin";
    redirectUrl.searchParams.set("redirectUrl", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl.toString(), { status: 302 });
  }

  // STRIPE_ORDER_SUCCESS
  if (req.nextUrl.pathname === "/success") {
    const parsedUrl = req.nextUrl.searchParams.get("session_id");

    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
    });

    const session = sessions.data.find((session) => session.id === parsedUrl);

    if (session) {
      console.log("valid session");
    } else {
      return NextResponse.redirect(new URL(`/cart`, req.nextUrl).href);
    }
  }
}
