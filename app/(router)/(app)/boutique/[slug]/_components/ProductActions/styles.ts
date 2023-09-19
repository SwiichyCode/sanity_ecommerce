import styled from "styled-components";

export const ProductActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.625rem;
`;

export const SpanLink = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

export const CartAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.125rem;
`;

export const LocationAction = styled.div`
  max-width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.125rem;
`;
