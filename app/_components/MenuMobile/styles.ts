import styled from "styled-components";

export const MenuMobileWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isMenuOpen"].includes(prop),
})<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 9999;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0")};
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-blue);
  transition: width 0.3s ease-in;
  overflow: hidden;
  padding: 2.4rem 0;
`;

export const NavigationWrapper = styled.div`
  padding: 2.4rem;
`;

export const Backdrop = styled.div<{ isMenuOpen: boolean }>`
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
