import styled from "styled-components";

export const TextFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const TextFieldLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

export const TextField = styled.input`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  border: 1px solid var(--color-grey-200);
  padding: 0.625rem 0.875rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  border-radius: var(--rounded-lg);

  &:focus {
    outline: none;

    border: 1px solid var(--color-blue);
  }
`;
