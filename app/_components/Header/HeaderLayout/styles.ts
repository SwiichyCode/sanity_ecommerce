import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const HeaderWrapper = styled.header.withConfig({
  shouldForwardProp: (prop) => !["pathname"].includes(prop),
})<{ pathname: string }>`
  position: ${({ pathname }) => (pathname === "/" ? "fixed" : "relative")};
  z-index: 9999;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  background-color: var(--color-blue);
`;
