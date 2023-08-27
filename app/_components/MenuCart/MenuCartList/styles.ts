import styled from "styled-components";

export const MenuCartList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["cartLength"].includes(prop),
})<{ cartLength: number }>`
  min-height: 20rem;
  max-height: 37.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  padding: ${(props) =>
    props.cartLength > 1 ? "2.4rem 1.6rem 2.4rem 0" : "0"};
  overflow-y: ${(props) => (props.cartLength > 2 ? "auto" : "initial")};
  &::-webkit-scrollbar {
    width: 0.6rem;
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
  gap: 2.4rem;
`;

export const MenuCartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const MenuCartImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageURL"].includes(prop),
})<{ imageURL?: string }>`
  width: 6.4rem;
  height: 6.4rem;
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  background-position: center;
  border-radius: var(--rounded-lg);
`;

export const MenuCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const MenuCartName = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 15rem;
`;

export const MenuCartPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const MenuCartQuantity = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: var(--color-grey-600);
`;

export const MenuCartPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: var(--color-grey-600);
`;

export const MenuCartTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuCartTotalTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.6rem;
`;

export const MenuCartTotalPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.6rem;
`;
