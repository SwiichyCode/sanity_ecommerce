"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useWindowSize } from "usehooks-ts";
import { useMenuMobileStore } from "@/app/_stores/useMenuMobileStore";
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import Hamburger from "@/app/_components/Hamburger";
import MenuMobile from "@/app/_components/MenuMobile";
import * as S from "./styles";

export default function Header() {
  const { closeMenu } = useMenuMobileStore();
  const { width } = useWindowSize();
  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    if (width >= 1024) {
      closeMenu();
    }
  }, [width]);

  return (
    <S.HeaderWrapper pathname={pathname}>
      {width < 1024 && (
        <>
          <Hamburger />
          <MenuMobile />
        </>
      )}

      <Logo />

      {width > 1024 && (
        <>
          <Navigation />
          <Navigation isAuth />
        </>
      )}
    </S.HeaderWrapper>
  );
}
