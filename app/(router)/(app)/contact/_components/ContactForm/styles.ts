import styled from "styled-components";

export const ContactFormWrapper = styled.form`
  width: 100%;
  max-width: 55.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  box-shadow: var(--shadow-xl);
  background-color: var(--color-white);
  border-radius: var(--rounded-lg);
  padding: 3.2rem 4.8rem;

  & > button {
    width: 100%;
  }

  & > textarea {
    min-height: 47.4rem;
  }
`;
