import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const CheckoutDetailsFormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.375rem;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 34.625rem;
    flex-direction: column;
    align-items: center;
    gap: 2.75rem;
  }
`;
