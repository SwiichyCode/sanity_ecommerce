import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
  gap: 1rem;
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonBase = styled.button`
  border: none;
  border-radius: var(--rounded-lg);
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: var(--color-white);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`;

export const PaginationButton = styled(ButtonBase).withConfig({
  shouldForwardProp: (prop) => !["index", "page"].includes(prop),
})<{ index: number; page: number }>`
  width: 3rem;
  height: 3rem;
  background-color: ${({ index, page }) =>
    index === page ? "var(--color-blue-hover)" : "var(--color-blue)"};

  &:hover {
    background-color: var(--color-blue-hover);
  }
`;

export const PaginationArrow = styled(ButtonBase).withConfig({
  shouldForwardProp: (prop) => !["disabled"].includes(prop),
})<{ disabled: boolean }>`
  height: 3rem;
  padding: 0 1rem;
  background-color: ${({ disabled }) =>
    disabled ? "#b3b3b3" : "var(--color-blue)"};

  &:hover {
    background-color: ${({ disabled }) =>
      !disabled && "var(--color-blue-hover)"};
  }
`;
