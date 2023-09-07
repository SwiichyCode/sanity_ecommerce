import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProductsListWrapper = styled.div`
  margin: 3.2rem 0;
`;

export const ProductsListGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => !["products"].includes(prop),
})<{ products: number }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--product-card-width), 1fr)
  );
  gap: 2.4rem;

  @media screen and (max-width: ${breakpoints.xl}) {
    justify-items: center;
  }
`;

export const ProductsListColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ProductCardWrapper = styled.div`
  width: 200px;
  height: 300px;
  color: var(--color-white);
  background-color: black;
`;
