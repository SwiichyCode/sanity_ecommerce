import styled from "styled-components";

export const HamburgerWrapper = styled.button`
  position: absolute;
  left: 2.4rem;
  border: none;
  background-color: #00457e;
  border-radius: var(--rounded-md);
  padding: 0.6rem 0.6rem 0.4rem 0.6rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #2f70af;
  }
`;
