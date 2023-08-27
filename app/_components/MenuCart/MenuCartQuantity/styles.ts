import styled from "styled-components";

export const MenuCartQuantityHandler = styled.div`
  width: 7.4rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-200);
  border-radius: 0.4rem;
`;
export const MenuCartQuantityButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--color-text);
  background-color: transparent;
  border: none;
  padding: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--color-blue);
  }
`;
export const MenuCartInputNumber = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  border: none;
`;
