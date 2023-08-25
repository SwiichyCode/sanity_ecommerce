"use client";
import Footer from "@/app/_components/Footer/_index";
import Header from "@/app/_components/Header";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const AppWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  flex: 1;
`;

export default function AppLayout({ children }: Props) {
  return (
    <AppWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </AppWrapper>
  );
}
