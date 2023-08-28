"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const AppWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function AppLayoutWrapper({ children }: Props) {
  return <AppWrapper>{children}</AppWrapper>;
}
