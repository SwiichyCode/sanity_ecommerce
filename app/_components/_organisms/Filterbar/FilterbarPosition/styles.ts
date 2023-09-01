import styled from "styled-components";

export const FilterBarIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const FilterBarIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ active: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active }) =>
    active ? "var(--color-blue-hover)" : "var(--color-grey-400)"};
  cursor: pointer;
`;

export const Line = styled.div`
  width: 1px;
  height: 2.4rem;
  background-color: var(--color-grey-400);
`;
