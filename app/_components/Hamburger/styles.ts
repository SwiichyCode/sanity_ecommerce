import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const HamburgerWrapper = styled.button`
  display: none;
  border: none;
  background-color: #00457e;
  border-radius: var(--rounded-md);
  padding: 0.6rem 0.6rem 0.4rem 0.6rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: ${breakpoints.lg}) {
    display: block;
  }

  &:hover {
    background-color: #2f70af;
  }
`;
