import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const AuthCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 34.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--rounded-2xl);
  background: var(--color-white);
  box-shadow: var(--shadow);
  padding: 3.5rem 6.125rem 4rem 6.125rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 3.5rem 3rem 2rem 3rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 3.5rem 0 2rem 0;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const AuthCardLogoWrapper = styled.div`
  position: absolute;
  top: -3.313rem;
  left: 50%;
  transform: translateX(-50%);
  /* background-color: var(--color-blue); */
  border-radius: var(--rounded-2xl);
  padding: 0.75rem;
`;
