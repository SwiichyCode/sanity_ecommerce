"use client";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";
import Navigation from "@/app/_components/Navigation";
import MenuCart from "../../MenuCart";

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

type Props = {
  user: any;
};

export default function HeaderDesktopLayout({ user }: Props) {
  const { width } = useWindowSize();
  return (
    width > 1024 && (
      <>
        <Navigation />
        <RightSide>
          <Navigation isAuth user={user} />
          <MenuCart />
        </RightSide>
      </>
    )
  );
}
