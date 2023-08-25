import Link from "next/link";
import styled from "styled-components";

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.8rem;
  color: var(--color-grey-900);
  margin-bottom: 4.2rem;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 35.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ForgotPassword = styled(Link)`
  width: max-content;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-blue);
  text-decoration: none;
  margin-left: auto;
`;

export const FormFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.4rem;
`;

export const FormFooterText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const FormFooterLink = styled.button`
  color: var(--color-blue);
  font-size: 1.4rem;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
