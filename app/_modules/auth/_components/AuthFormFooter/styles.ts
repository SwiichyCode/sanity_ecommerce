import styled from "styled-components";

export const AuthFormFooterWrapper = styled.div`
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

  & > a {
    color: var(--color-blue);
    text-decoration: none;
  }
`;
