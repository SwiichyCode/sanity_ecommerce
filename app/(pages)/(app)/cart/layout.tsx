"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const CartLayoutWrapper = styled.div`
  min-height: calc(100vh - 43.1rem);
  padding: 7.2rem 8.8rem;
`;

export default function CartLayout({ children }: Props) {
  return <CartLayoutWrapper>{children}</CartLayoutWrapper>;
}
