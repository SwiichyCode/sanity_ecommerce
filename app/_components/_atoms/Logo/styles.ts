import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";
import Link from "next/link";

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoText = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
