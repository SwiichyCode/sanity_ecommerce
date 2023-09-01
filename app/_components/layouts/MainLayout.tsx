"use client";
import styled from "styled-components";

const MainWrapper = styled.main`
  flex: 1;
`;

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return <MainWrapper>{children}</MainWrapper>;
}
