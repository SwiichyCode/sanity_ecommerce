import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const HeaderWrapper = styled.header.withConfig({
  shouldForwardProp: (prop) => !["pathname"].includes(prop),
})<{ pathname: string }>`
  position: ${({ pathname }) => (pathname === "/" ? "fixed" : "initial")};
  z-index: 9999;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  background-color: var(--color-blue);
  overflow: hidden;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
