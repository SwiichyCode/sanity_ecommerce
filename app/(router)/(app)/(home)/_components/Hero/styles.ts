import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  background-image: url("/discus_hero_right.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  color: var(--color-white);
  margin-top: 5rem;

  @media (max-width: ${breakpoints.lg}) {
    background-image: url("/home_bg.png");
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.656rem;
  font-weight: 500;
  line-height: 3.281rem;
  margin-bottom: 1.5rem;

  span {
    font-size: 3.594rem;
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 2.188rem;
    line-height: 2.813rem;

    span {
      font-size: 2.813rem;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.563rem;
  margin-bottom: 3rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.563rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.125rem;
    line-height: 1.563rem;
  }
`;
