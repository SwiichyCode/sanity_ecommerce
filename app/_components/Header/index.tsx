import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Logo from "@/app/_components/Logo";
import HeaderLayout from "./HeaderLayout";
import HeaderDesktopLayout from "./HeaderDesktopLayout";
import HeaderMobileLayout from "./HeaderMobileLayout";

export const dynamic = "force-dynamic";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();

  return (
    <HeaderLayout>
      <Logo />
      <HeaderMobileLayout user={user} />
      <HeaderDesktopLayout user={user} />
    </HeaderLayout>
  );
}
