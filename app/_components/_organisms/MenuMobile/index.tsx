"use client";

import { useEffect } from "react";
import { useWindowSize } from "usehooks-ts";
import { Backdrop, MenuMobileWrapper } from "./styles";
import { useMenuMobileStore } from "@/app/_components/_organisms/MenuMobile/useMenuMobile";
import Navigation from "@/app/_components/_organisms/Navigation";

type Props = {
  user?: any;
};

export default function MenuMobile({ user }: Props) {
  const { isMenuOpen, closeMenu } = useMenuMobileStore();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 1024) {
      closeMenu();
    }
  }, [width]);

  return (
    <>
      <Backdrop isMenuOpen={isMenuOpen} />
      <MenuMobileWrapper isMenuOpen={isMenuOpen}>
        <p></p>
        <Navigation />
        <Navigation isAuth user={user} />
      </MenuMobileWrapper>
    </>
  );
}
