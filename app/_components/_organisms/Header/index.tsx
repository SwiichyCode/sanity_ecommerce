import HeaderLayout from "./HeaderLayout";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <HeaderLayout className="responsive-padding">
      <HeaderMobile user={session} />
      <HeaderDesktop user={session} />
    </HeaderLayout>
  );
}
