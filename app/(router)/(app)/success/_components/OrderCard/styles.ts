import styled from "styled-components";

export const OrderCardWrapper = styled.div`
  width: 100%;
  max-width: 54rem;
  padding: 4.8rem;
  border-radius: var(--rounded-lg);
  background-color: var(--color-white);
`;

export const OrderCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 4.8rem;
`;

export const OrderCardTitle = styled.h2`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.6rem;
`;

export const OrderCardSubtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;

  span {
    font-weight: 700;
  }
`;

export const OrderProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const OrderProductWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
`;
