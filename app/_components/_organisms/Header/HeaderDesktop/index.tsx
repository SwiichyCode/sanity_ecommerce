"use client";
import { useWindowSize } from "usehooks-ts";
import Navigation from "@/app/_components/_organisms/Navigation";
import MenuCart from "@/app/(router)/(app)/cart/_components/MenuCart";
import Logo from "@/app/_components/_atoms/Logo";
import HeaderLeftSide from "../HeaderLeftSide";
import HeaderMiddleSide from "../HeaderMiddleSide";
import HeaderRightSide from "../HeaderRightSide";

type Props = {
  user: any;
};

export default function HeaderDesktop({ user }: Props) {
  const { width } = useWindowSize();
  return (
    width > 1024 && (
      <>
        <HeaderLeftSide>
          <Logo />
        </HeaderLeftSide>
        <HeaderMiddleSide>
          <Navigation />
        </HeaderMiddleSide>
        <HeaderRightSide>
          <Navigation isAuth user={user} />
          <MenuCart />
        </HeaderRightSide>
      </>
    )
  );
}
