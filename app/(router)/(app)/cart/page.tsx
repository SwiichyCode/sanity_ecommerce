import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CheckoutDetails from "./_components/CheckoutDetails";
import CheckoutAuth from "./_components/CheckoutAuth";
import Summary from "@/app/(router)/(app)/cart/_components/Summary";

export const revalidate = 10;

export default async function CartPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();
  const userIsLoggedIn = user && user.user;

  return userIsLoggedIn ? (
    <CheckoutDetails user={user.user} />
  ) : (
    <>
      <CheckoutAuth isCheckout={true} /> <Summary user={userIsLoggedIn} />
    </>
  );
}
