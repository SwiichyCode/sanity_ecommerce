import styled, { css } from "styled-components";
import Link from "next/link";
import { BiLogOut, BiLogInCircle } from "react-icons/bi";
import { breakpoints } from "@/app/_styles/breakpoints";

export const NavigationWrapper = styled.nav``;

export const NavigationList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["isAuth"].includes(prop),
})<{ isAuth: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: ${({ isAuth }) => (isAuth ? "1.5rem" : "3rem")};

  @media screen and (max-width: ${breakpoints.xl}) {
    /* flex-direction: row-reverse; */
    gap: 1.5rem;
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 0;

    & > button {
      width: 100%;
    }
  }

  @media screen and (max-width: ${breakpoints.md}) {
    & > button {
      max-width: 15.75rem;
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
    text-align: ${({ isAuth }) => isAuth && "left"};
    transition: background-color 0.2s ease-in-out;
    padding: 1rem;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    max-width: 15.75rem;
  }
`;

export const NavigationLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["isActive"].includes(prop),
})<{ isActive?: boolean }>`
  font-size: 1rem;
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

const NavigationIcon = css`
  font-size: 1.625rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--color-blue-hover);
  }
`;

export const NavigationIconLogout = styled(BiLogOut)`
  ${NavigationIcon}
`;

export const NavigationIconLogin = styled(BiLogInCircle)`
  ${NavigationIcon}
`;
