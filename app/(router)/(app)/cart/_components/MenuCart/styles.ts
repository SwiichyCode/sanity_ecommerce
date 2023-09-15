import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const MenuCartWrapper = styled.div`
  width: max-content;
`;

export const MenuCartContainer = styled.div`
  position: absolute;
  top: 6.5rem;
  right: 1.5rem;
  width: 100%;
  max-width: 25rem;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-text);
  background-color: var(--color-white);
  padding: 1.5rem;
  box-shadow: var(--shadow-xl);
  border-radius: var(--rounded-lg);

  @media (max-width: ${breakpoints.sm}) {
    top: 5rem;
    right: 0;
    border-radius: 0;
    max-width: 100%;
  }
`;
