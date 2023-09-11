"use client";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  margin: 8.8rem 0;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper className="responsive-padding">{children}</LayoutWrapper>
  );
}
