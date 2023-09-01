import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CheckoutDetails from "@/app/_components/_organisms/CheckoutDetails";
import CheckoutAuth from "@/app/_components/_organisms/CheckoutAuth";
import Summary from "@/app/_components/_organisms/Summary";

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
