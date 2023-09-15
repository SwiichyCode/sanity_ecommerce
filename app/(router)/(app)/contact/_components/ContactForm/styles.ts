import styled from "styled-components";

export const ContactFormWrapper = styled.form`
  width: 100%;
  max-width: 34.625rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: var(--shadow-xl);
  background-color: var(--color-white);
  border-radius: var(--rounded-lg);
  padding: 2rem 3rem;

  & > button {
    width: 100%;
  }

  & > textarea {
    min-height: 29.625rem;
  }
`;
