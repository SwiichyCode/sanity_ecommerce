import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  background-color: var(--color-blue);
  padding: 0 8.8rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 0 4.8rem;
  }

  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;
    padding: 0 2.4rem;
  }
`;
