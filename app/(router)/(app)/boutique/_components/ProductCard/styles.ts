import styled from "styled-components";
import Image from "next/image";

export const ProductCardWrapper = styled.article`
  width: 100%;
  max-width: var(--product-card-width);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow);
  padding: 2.4rem;
`;

export const ProductCardHeader = styled.div`
  position: relative;
  margin-bottom: 1.6rem;

  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;

export const ProductCardAction = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const ProductCardActionButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border: none;
  border-radius: 50%;
  background-color: var(--color-white);
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00457e;
  }
`;

export const ProductCartActionIcon = styled(Image)``;

export const ProductCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ProductCardStars = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  background-color: #252b42;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  gap: 0.8rem;
`;

export const ProductCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.54px;
`;

export const ProductCardDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const ProductCardPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: #252b42;
`;

export const ProductCardImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageURL"].includes(prop),
})<{ imageURL: any }>`
  position: relative;
  width: 100%;
  height: 249px;
  border-radius: var(--rounded-lg);
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
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
