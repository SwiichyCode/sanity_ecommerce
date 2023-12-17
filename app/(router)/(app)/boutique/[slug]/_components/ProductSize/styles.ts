import styled from "styled-components";

export const ProductSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductSizeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const ProductSizeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductSizeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
`;

export const ErrorMessage = styled.p`
  color: var(--color-red);
  font-size: 0.875rem;
  font-weight: 500;
`;
