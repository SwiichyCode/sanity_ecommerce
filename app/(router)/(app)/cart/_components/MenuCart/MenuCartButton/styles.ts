import styled from "styled-components";

export const MenuCartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  font-family: inherit;
  padding-top: 0.8rem;
  cursor: pointer;
`;

export const MenuCartCounter = styled.span`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0rem;
  right: -0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2rem;
  color: var(--color-white);
  border-radius: 50%;
  background-color: var(--color-white);
  color: var(--color-blue);
`;
