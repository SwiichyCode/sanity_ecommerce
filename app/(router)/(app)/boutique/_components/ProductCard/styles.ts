import styled from "styled-components";

export const ProductCardWrapper = styled.article`
  width: 100%;
  max-width: var(--product-card-width);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow);
  padding: 1.5rem;
`;

export const ProductCardHeader = styled.div`
  position: relative;
  margin-bottom: 0.625rem;

  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;

export const ProductCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.54px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ProductCardDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const ProductCardPrice = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #252b42;
`;

export const ProductCardImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageURL"].includes(prop),
})<{ imageURL: any }>`
  position: relative;
  width: 100%;
  height: 15.563rem;
  border-radius: var(--rounded-lg);
  background-image: url(${(props) => props.imageURL});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
