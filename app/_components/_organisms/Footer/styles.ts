import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue);
  color: var(--color-white);
  margin-top: auto;
  padding: 5.5rem 5.5rem;
  gap: 3rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 3rem 3rem;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding: 3rem 1.5rem;
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
    gap: 1.5rem;
  }
`;

export const FooterMiddleSide = styled(FooterTopSide)`
  align-items: flex-start;
`;

export const FooterBottomSide = styled(FooterTopSide)``;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Paragraph = styled.p`
  width: 100%;
  max-width: 36rem;
  font-size: 1rem;
  line-height: 1.75rem;

  @media (max-width: ${breakpoints.xl}) {
    max-width: 29.75rem;
  }
`;

export const LegalMention = styled.p`
  font-size: 0.75rem;
`;
