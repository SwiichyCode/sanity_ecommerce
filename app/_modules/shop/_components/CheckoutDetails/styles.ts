import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const CheckoutDetailsFormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5.4rem;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 55.4rem;
    flex-direction: column;
    align-items: center;
    gap: 4.4rem;
  }
`;
