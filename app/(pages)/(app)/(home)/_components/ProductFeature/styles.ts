import styled from "styled-components";

export const ProductFeatureWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 9rem 8.8rem;
`;

export const ProductFeatureImage = styled.div`
  width: 100%;
  max-width: 723px;
  background-image: url("/home_featured.jpg");
  background-size: cover;
`;

export const ProductFeatureContent = styled.div``;

export const ProductFeatureHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14.6rem;
`;

export const ProductFeatureTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.72px;
  margin-bottom: 2.4rem;
`;

export const ProductFeatureDescription = styled.p`
  max-width: 80rem;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

export const ProductFeatureList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.8rem;
`;
