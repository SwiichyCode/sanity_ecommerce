import styled from "styled-components";

export const Button = styled.button`
  width: max-content;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-white);
  font-family: Poppins;
  background-color: #00457e;
  border-radius: var(--rounded-md);
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  border: none;
  padding: 1.2rem 1.8rem;
  transition: background-color 0.2s ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  & > a {
    color: var(--color-white);
    text-decoration: none;
  }

  &:hover {
    background-color: #2f70af;
  }

  &:disabled {
    background-color: #b3b3b3;
    cursor: not-allowed;
  }
`;
