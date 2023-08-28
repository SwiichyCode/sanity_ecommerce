"use client";
import Hamburger from "../../Hamburger";
import MenuMobile from "../../MenuMobile";

type Props = {
  user?: any;
};

export default function HeaderMobileLayout({ user }: Props) {
  return (
    <>
      <Hamburger />
      <MenuMobile user={user} />
    </>
  );
}
