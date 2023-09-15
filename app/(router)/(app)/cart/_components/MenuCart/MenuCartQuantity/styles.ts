import styled from "styled-components";

export const MenuCartQuantityHandler = styled.div`
  width: 4.625rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-200);
  border-radius: 0.25rem;
`;
export const MenuCartQuantityButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text);
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    color: var(--color-blue);
  }
`;
export const MenuCartInputNumber = styled.span`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  border: none;
`;
