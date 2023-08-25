import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Backdrop, MenuMobileWrapper } from "./styles";
import { useMenuMobileStore } from "@/app/_stores/useMenuMobileStore";
import Navigation from "@/app/_components/Navigation";

export default function MenuMobile() {
  const { isMenuOpen, closeMenu } = useMenuMobileStore();
  const ref = useRef(null);
  useOnClickOutside(ref, (e) => handleClickOutside(e));

  const handleClickOutside = (e: any) => {
    const target = e.target;

    if (target.className.includes("hamburger")) {
      return;
    }

    closeMenu();
  };

  return (
    <>
      <Backdrop isMenuOpen={isMenuOpen} />
      <MenuMobileWrapper ref={ref} isMenuOpen={isMenuOpen}>
        <p>Panier</p>
        <Navigation />
        <Navigation isAuth />
      </MenuMobileWrapper>
    </>
  );
}
