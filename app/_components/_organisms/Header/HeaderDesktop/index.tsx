"use client";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";
import Navigation from "@/app/_components/_organisms/Navigation";
import MenuCart from "../../MenuCart";
import Logo from "@/app/_components/_atoms/Logo";
import HeaderLeftSide from "../HeaderLeftSide";
import HeaderMiddleSide from "../HeaderMiddleSide";
import HeaderRightSide from "../HeaderRightSide";

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

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
          <RightSide>
            <Navigation isAuth user={user} />
            <MenuCart />
          </RightSide>
        </HeaderRightSide>
      </>
    )
  );
}
