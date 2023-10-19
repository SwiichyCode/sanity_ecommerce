import styled from "styled-components";

export const ProductPreviewInformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductTitle = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  max-width: 31.25rem;
  margin-bottom: 0.938rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const LocationAction = styled.div`
  max-width: max-content;
  display: flex;
  align-items: center;
  gap: 1.125rem;
`;

export const SpanLink = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;
