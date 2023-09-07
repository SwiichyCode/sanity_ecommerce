import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";
export const FilterBarWrapper = styled.div`
  min-height: 8rem;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 2.4rem;
  background-color: var(--color-blue);
  color: var(--color-white);
  gap: 3.2rem;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
