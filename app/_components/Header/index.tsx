import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import HeaderLayout from "./HeaderLayout";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();

  return (
    <HeaderLayout className="responsive-padding">
      <HeaderMobile user={user} />
      <HeaderDesktop user={user} />
    </HeaderLayout>
  );
}
