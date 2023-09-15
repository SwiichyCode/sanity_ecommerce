import styled from "styled-components";

export const OrderCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.75rem;
  padding: 3rem;
  border-radius: var(--rounded-lg);
  background-color: var(--color-white);
  gap: 3rem;
`;

export const OrderCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const OrderCardTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.25rem;
`;

export const OrderCardSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.188rem;

  span {
    font-weight: 700;
  }
`;

export const OrderProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const OrderProductWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;
