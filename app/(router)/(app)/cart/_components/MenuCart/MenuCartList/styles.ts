import styled from "styled-components";

export const MenuCartList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["cartLength"].includes(prop),
})<{ cartLength: number }>`
  min-height: 12.5rem;
  max-height: 23.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: ${(props) => (props.cartLength > 1 ? "1.5rem 1rem 1.5rem 0" : "0")};
  overflow-y: ${(props) => (props.cartLength > 2 ? "auto" : "initial")};
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-grey-200);
    border-radius: var(--rounded-md);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-400);
    border-radius: var(--rounded-md);
  }
`;

export const MenuCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const MenuCartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const MenuCartQuantity = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 0.875rem;
  color: var(--color-grey-600);
`;

export const MenuCartTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuCartTotalTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1rem;
`;

export const MenuCartTotalPrice = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1rem;
`;
