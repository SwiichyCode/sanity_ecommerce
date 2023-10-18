import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const FilterBarWrapper = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  background-color: var(--color-blue);
  color: var(--color-white);
  gap: 2rem;

  /* @media (max-width: ${breakpoints.sm}) {
    flex-wrap: wrap;
  } */
`;
