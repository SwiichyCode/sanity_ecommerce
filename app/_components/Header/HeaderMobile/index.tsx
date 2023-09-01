"use client";
import { useWindowSize } from "usehooks-ts";
import Hamburger from "../../Hamburger";
import MenuCart from "../../MenuCart";
import MenuMobile from "../../MenuMobile";
import Logo from "../../Logo";

type Props = {
  user?: any;
};

export default function HeaderMobile({ user }: Props) {
  const { width } = useWindowSize();
  return (
    <>
      <Hamburger />
      {width < 1024 && <Logo />}
      <MenuMobile user={user} />
      {width < 1024 && <MenuCart />}
    </>
  );
}
