import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5.625rem 0;

  @media (max-width: ${breakpoints.lg}) {
    align-items: flex-start;
    padding: 3rem 0;
  }
`;

export const FeaturesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-bottom: 1.5rem;
`;

export const FeaturesSubtitle = styled.p`
  width: 50%;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.563rem;
  margin-bottom: 9.125rem;

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    text-align: left;

    margin-bottom: 4.563rem;
  }
`;

export const FeaturesList = styled.ul`
  width: 100%;
  max-width: 69.438rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const FeaturesItem = styled.li`
  width: 100%;
  max-width: 28.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeaturesTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const FeaturesItemIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 3.281px;
  background-color: var(--color-blue);
`;

export const FeaturesItemIcon = styled(Image)``;

export const FeaturesItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const FeaturesItemDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.563rem;
`;
