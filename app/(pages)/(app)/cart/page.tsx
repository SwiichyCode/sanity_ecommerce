import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CheckoutDetails from "./_components/CheckoutDetails";
import CheckoutAuth from "./_components/CheckoutAuth";
import Summary from "./_components/Summary";

export default async function CartPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();
  const userIsLoggedIn = user && user.user;

  return userIsLoggedIn ? (
    <CheckoutDetails user={user} />
  ) : (
    <>
      <CheckoutAuth isCheckout /> <Summary user={userIsLoggedIn} />
    </>
  );
}
