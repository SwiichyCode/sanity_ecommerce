import Image from "next/image";
import IconHamburger from "@/public/hamburger.svg";
import { HamburgerWrapper } from "./styles";
import { useMenuMobileStore } from "@/app/_stores/useMenuMobileStore";

export default function Hamburger() {
  const { toggleMenu } = useMenuMobileStore();
  return (
    <HamburgerWrapper className="hamburger" onClick={() => toggleMenu()}>
      <Image
        className="hamburger"
        src={IconHamburger}
        width={28}
        height={28}
        alt="Hamburger"
      />
    </HamburgerWrapper>
  );
}
