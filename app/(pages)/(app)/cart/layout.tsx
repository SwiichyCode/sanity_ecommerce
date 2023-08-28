"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const CartLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 43.1rem);
  background-color: #f1f1f1;
  padding: 8.8rem 16.5rem;
  gap: 8.8rem;
`;

export default function CartLayout({ children }: Props) {
  return <CartLayoutWrapper>{children}</CartLayoutWrapper>;
}
