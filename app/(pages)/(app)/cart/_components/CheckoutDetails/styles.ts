import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const CheckoutDetailsWrapper = styled.div`
  width: 100%;
  max-width: 29.5rem;
  max-width: 70.3rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--rounded-lg);
  padding: 5.4rem 4.8rem;
  gap: 5.4rem;

  @media (max-width: ${breakpoints.lg}) {
    margin-top: -8.8rem;
  }
`;

export const CheckoutDetailsTitle = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
`;

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

export const CheckoutDetailsFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CheckoutDetailsFormGroupTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.6rem;
  color: var(--color-blue);
`;

export const TextFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;
