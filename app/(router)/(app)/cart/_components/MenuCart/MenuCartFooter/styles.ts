import styled from "styled-components";

export const MenuCartFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  border-top: 1px solid var(--color-grey-200);
  padding-top: 1.5rem;

  & > button {
    width: 100%;
  }
`;

export const MenuCartFooterBtn = styled.button`
  width: max-content;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--rounded-md);
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--color-text);
    font-weight: 700;
  }
`;
