import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0.8rem;
  border-radius: var(--rounded-lg);
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-white);
  gap: 0.8rem;
`;

export const SearchBar = styled.input`
  border: none;
  background-color: transparent;
  color: var(--color-text);
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-text);
  }
`;

export const SearchIcon = styled(BsSearch)`
  font-size: 1.6rem;
  color: var(--color-text);
`;
