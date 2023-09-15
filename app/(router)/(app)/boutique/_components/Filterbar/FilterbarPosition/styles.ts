import styled from "styled-components";

export const FilterBarIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`;

export const FilterBarIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ active: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active }) =>
    active ? "var(--color-white)" : "var(--color-grey-400)"};
  cursor: pointer;
`;

export const Line = styled.div`
  width: 1px;
  height: 1.5rem;
  background-color: var(--color-grey-400);
`;
