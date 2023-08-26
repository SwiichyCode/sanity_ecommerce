import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  background-image: url("/home_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  color: var(--color-white);
  padding: 0 8.8rem;
  margin-top: 8rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 0 4.8rem;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding: 0 2.4rem;
  }
`;

export const DiscusPatern = styled.div`
  width: 400px;
  height: 300px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: url("/discus_hero.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: ${breakpoints.xl}) {
    top: 30%;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 300px;
    height: 200px;
    top: initial;
    bottom: 5%;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 76.8rem;
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 4.25rem;
  font-weight: 500;
  line-height: 5.25rem;
  margin-bottom: 2.4rem;

  span {
    font-size: 5.75rem;
    font-weight: 700;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 2.5rem;
  margin-bottom: 4.8rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin-bottom: 4.8rem;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`;
