import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const MenuMobileWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isMenuOpen"].includes(prop),
})<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 9999;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "18.75rem" : "0")};
  height: calc(100vh - 5rem);
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-blue);
  transition: width 0.3s ease-in;
  overflow: hidden;
  padding: 1.5rem 0;

  @media (max-width: ${breakpoints.xl}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0")};
    padding: 3rem 0;
  }
`;

export const NavigationWrapper = styled.div`
  padding: 1.5rem;
`;

export const Backdrop = styled.div<{ isMenuOpen: boolean }>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  transition: opacity 0.3s ease-in;
`;
