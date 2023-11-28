import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProductsListWrapper = styled.div`
  margin: 2rem 0;
`;

export const ProductsListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--product-card-width), 1fr)
  );
  gap: 1.5rem;

  @media screen and (max-width: ${breakpoints.xl}) {
    justify-items: center;
  }
`;

export const ProductsListColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductCardWrapper = styled.div`
  width: 12.5rem;
  height: 18.75rem;
  color: var(--color-white);
  background-color: black;
`;
