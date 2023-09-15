import Link from "next/link";
import styled from "styled-components";

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.375rem;
  color: var(--color-grey-900);
  margin-bottom: 2.625rem;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 22.375rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;

  & > button {
    width: 100%;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ForgotPassword = styled(Link)`
  width: max-content;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-blue);
  text-decoration: none;
  margin-left: auto;
`;
