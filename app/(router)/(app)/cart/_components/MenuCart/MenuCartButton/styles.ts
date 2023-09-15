import styled from "styled-components";

export const MenuCartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  font-family: inherit;
  padding-top: 0.5rem;
  cursor: pointer;
`;

export const MenuCartCounter = styled.span`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0rem;
  right: -0.25rem;
  width: 1.125rem;
  height: 1.125rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.75rem;
  color: var(--color-white);
  border-radius: 50%;
  background-color: var(--color-white);
  color: var(--color-blue);
`;
