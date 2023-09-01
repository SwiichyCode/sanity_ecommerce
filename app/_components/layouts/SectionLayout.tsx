"use client";
import styled from "styled-components";
import { breakpoints } from "../../_styles/breakpoints";

type Props = {
  children: React.ReactNode;
};

const SectionLayoutWrapper = styled.section`
  padding: 0 8.8rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 0 4.8rem;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding: 0 2.4rem;
  }
`;

export default function SectionLayout({ children }: Props) {
  return <SectionLayoutWrapper>{children}</SectionLayoutWrapper>;
}
