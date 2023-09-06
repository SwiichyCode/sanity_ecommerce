"use client";
import { useWindowSize } from "usehooks-ts";
import Hamburger from "@/app/_components/_atoms/Hamburger";
import MenuCart from "@/app/_modules/shop/_components/MenuCart";
import MenuMobile from "@/app/_components/_organisms/MenuMobile";
import Logo from "@/app/_components/_atoms/Logo";

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
