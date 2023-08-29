import styled from "styled-components";

export const ProductsListWrapper = styled.div``;

export const ProductsListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  padding: 3.2rem 9.8rem;
`;
export const ProductsListColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 9.8rem;
`;

export const ProductCardWrapper = styled.div`
  width: 200px;
  height: 300px;
  color: var(--color-white);
  background-color: black;
`;
