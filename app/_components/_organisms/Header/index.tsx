// "use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderLayout from "./HeaderLayout";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <HeaderLayout className="responsive-padding">
      <HeaderMobile user={user} />
      <HeaderDesktop user={user} />
    </HeaderLayout>
  );
}
