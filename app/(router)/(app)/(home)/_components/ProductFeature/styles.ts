import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProductFeatureWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 5.625rem 0;

  @media (max-width: ${breakpoints.lg}) {
    padding: 3rem 0;
  }
`;

export const ProductFeatureImage = styled.div`
  width: 100%;
  max-width: 45.188rem;
  background-image: url("/home_featured.jpg");
  background-size: cover;
`;

export const ProductFeatureContent = styled.div``;

export const ProductFeatureHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 7.125rem;

  @media (max-width: ${breakpoints.lg}) {
    margin-bottom: 4.563rem;
  }
`;

export const ProductFeatureTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: -0.72px;
  margin-bottom: 1.5rem;
`;

export const ProductFeatureDescription = styled.p`
  max-width: 50rem;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.563rem;
`;

export const ProductFeatureList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;
