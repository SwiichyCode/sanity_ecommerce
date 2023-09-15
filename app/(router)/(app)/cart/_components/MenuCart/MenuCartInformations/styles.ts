import styled from "styled-components";

export const MenuCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MenuCartName = styled.h4.withConfig({
  shouldForwardProp: (prop) => !["isOrderDetail"].includes(prop),
})<{ isOrderDetail: boolean | undefined }>`
  width: 100%;
  max-width: ${(props) => (props.isOrderDetail ? "initial" : "9.375rem")};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  text-overflow: ${(props) => (props.isOrderDetail ? "initial" : "ellipsis")};

  white-space: ${(props) => (props.isOrderDetail ? "initial" : "nowrap")};
  overflow: hidden;
`;

export const MenuCartSize = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 0.875rem;
  color: var(--color-grey-600);
`;

export const MenuCartPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MenuCartPrice = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 0.875rem;
  color: var(--color-grey-600);
`;
