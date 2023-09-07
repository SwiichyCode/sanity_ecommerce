import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const MenuCartWrapper = styled.div`
  width: max-content;
`;

export const MenuCartContainer = styled.div`
  position: absolute;
  top: 10.4rem;
  right: 2.4rem;
  width: 100%;
  max-width: 40rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-text);
  background-color: var(--color-white);
  padding: 2.4rem;
  box-shadow: var(--shadow-xl);
  border-radius: var(--rounded-lg);

  @media (max-width: ${breakpoints.sm}) {
    top: 8rem;
    right: 0;
    border-radius: 0;
    max-width: 100%;
  }
`;
