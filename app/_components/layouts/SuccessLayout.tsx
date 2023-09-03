"use client";
import styled from "styled-components";

const SuccessLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-color: #f1f1f1;
`;

type Props = {
  children: React.ReactNode;
};

export default function SuccessLayout({ children }: Props) {
  return <SuccessLayoutWrapper>{children}</SuccessLayoutWrapper>;
}
