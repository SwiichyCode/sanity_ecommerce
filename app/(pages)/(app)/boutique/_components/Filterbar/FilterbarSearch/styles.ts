import styled from "styled-components";

export const SearchBar = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.8rem 0.8rem;
  font-family: var(--font-staatliches);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: black;
  }
`;
