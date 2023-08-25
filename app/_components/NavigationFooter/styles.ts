import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const NavigationFooterWrapper = styled.footer``;

export const NavigationFooterList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2.4rem;

  @media (max-width: ${breakpoints.lg}) {
    justify-content: flex-start;
  }
`;

export const NavigationFooterItem = styled.li``;

export const NavigationFooterLink = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--color-white);
`;
