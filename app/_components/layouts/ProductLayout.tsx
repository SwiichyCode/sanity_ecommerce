"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ProductLayoutWrapper = styled.div``;

export default function ProductLayout({ children }: Props) {
  return (
    <ProductLayoutWrapper className="responsive-padding">
      {children}
    </ProductLayoutWrapper>
  );
}
