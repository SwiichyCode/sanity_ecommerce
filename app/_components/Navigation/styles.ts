import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@/app/_styles/breakpoints";

export const NavigationWrapper = styled.nav``;

export const NavigationList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["isAuth"].includes(prop),
})<{ isAuth: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isAuth }) => (isAuth ? "2.4rem" : "4.8rem")};

  @media screen and (max-width: ${breakpoints.xl}) {
    gap: 2.4rem;
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    gap: 0;

    & > button {
      width: 100%;
    }
  }

  @media screen and (max-width: ${breakpoints.md}) {
    & > button {
      max-width: 25.2rem;
    }
  }
`;

export const NavigationItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !["isActive", "isAuth"].includes(prop),
})<{ isActive?: boolean; isAuth?: boolean }>`
  @media screen and (max-width: ${breakpoints.lg}) {
    width: 100%;
    border-radius: var(--rounded-md);
    background-color: ${({ isActive }) => isActive && "#2f70af"};
    text-align: ${({ isAuth }) => isAuth && "center"};
    transition: background-color 0.2s ease-in-out;
    padding: 1.6rem 1.6rem;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    max-width: 25.2rem;
  }
`;

export const NavigationLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["isActive"].includes(prop),
})<{ isActive: boolean }>`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${({ isActive }) =>
    isActive ? "var(--color-white)" : "var(--color-grey-400)"};
  transition: color 0.2s ease-in-out;

  @media screen and (max-width: ${breakpoints.lg}) {
    white-space: nowrap;
  }

  &:hover {
    color: var(--color-white);
  }
`;
