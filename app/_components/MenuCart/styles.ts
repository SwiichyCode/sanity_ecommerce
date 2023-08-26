import styled from "styled-components";

export const MenuCartWrapper = styled.div`
  width: max-content;
`;

export const MenuCartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  font-family: inherit;
  padding-top: 0.8rem;
  cursor: pointer;
`;

export const MenuCartCounter = styled.span`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0rem;
  right: -0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2rem;
  color: var(--color-white);
  border-radius: 50%;
  background-color: var(--color-white);
  color: var(--color-blue);
`;

export const MenuCartContainer = styled.div`
  position: absolute;
  top: 10.4rem;
  right: 2.4rem;
  width: 40rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-text);
  background-color: var(--color-white);
  padding: 2.4rem;
  box-shadow: var(--shadow-xl);
  border-radius: var(--rounded-lg);
`;

export const MenuCartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-200);
  padding-bottom: 1.6rem;
`;

export const MenuCartTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const MenuCartIcon = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  line-height: 1.6rem;
  cursor: pointer;
`;

export const MenuCartClose = styled(MenuCartIcon)``;

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
  width: 8rem;
  height: 8rem;
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

export const MenuCartRemove = styled(MenuCartIcon)``;

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

export const MenuCartFooter = styled.div`
  display: flex;
  gap: 2.4rem;
  border-top: 1px solid var(--color-grey-200);
  padding-top: 2.4rem;
`;

export const MenuCartFooterBtn = styled.button`
  width: max-content;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--rounded-md);
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  padding: 1.2rem 2.4rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--color-text);
    font-weight: 700;
  }
`;
