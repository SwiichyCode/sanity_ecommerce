import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const CheckoutDetailsWrapper = styled.div`
  width: 100%;
  max-width: 43.938rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--rounded-lg);
  padding: 3.375rem 3rem;
  gap: 3.375rem;
`;

export const CheckoutDetailsTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-transform: uppercase;
`;

export const CheckoutDetailsForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.375rem;
`;

export const CheckoutDetailsFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CheckoutDetailsFormGroupTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--color-blue);
`;

export const TextFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const FormMessage = styled.p`
  font-size: 0.875rem;
  padding: 1rem 0;
`;
