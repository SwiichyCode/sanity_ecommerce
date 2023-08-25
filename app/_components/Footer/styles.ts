import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue);
  color: var(--color-white);
  margin-top: auto;
  padding: 8.8rem 8.8rem;
  gap: 4.8rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 4.8rem 4.8rem;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding: 4.8rem 2.4rem;
  }
`;

export const FooterTopSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
  }
`;

export const FooterMiddleSide = styled(FooterTopSide)`
  align-items: flex-start;
`;

export const FooterBottomSide = styled(FooterTopSide)``;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Paragraph = styled.p`
  width: 100%;
  max-width: 57.6rem;
  font-size: 1.6rem;
  line-height: 2.8rem;

  @media (max-width: ${breakpoints.xl}) {
    max-width: 47.6rem;
  }
`;

export const LegalMention = styled.p`
  font-size: 1.2rem;
`;
