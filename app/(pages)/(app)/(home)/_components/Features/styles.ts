import Image from "next/image";
import styled from "styled-components";

export const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9rem 8.8rem;
`;

export const FeaturesTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-bottom: 2.4rem;
`;

export const FeaturesSubtitle = styled.p`
  width: 50%;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin-bottom: 14.6rem;
`;

export const FeaturesList = styled.ul`
  width: 100%;
  max-width: 111.1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4.8rem;
`;

export const FeaturesItem = styled.li`
  width: 100%;
  max-width: 45.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const FeaturesTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const FeaturesItemIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 5.25px;
  background-color: var(--color-blue);
`;

export const FeaturesItemIcon = styled(Image)``;

export const FeaturesItemTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const FeaturesItemDescription = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;
`;
