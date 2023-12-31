import styled from "styled-components";

export const MenuCartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-200);
  padding-bottom: 1rem;
`;

export const MenuCartTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const MenuCartClose = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  line-height: 1rem;
  cursor: pointer;
`;
