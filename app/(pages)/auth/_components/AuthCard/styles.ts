import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const AuthCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 55.4rem;
  height: 54.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--rounded-2xl);
  background: var(--color-white);
  box-shadow: var(--shadow);
  padding: 5.6rem 9.8rem 6.4rem 9.8rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 5.6rem 4.8rem 3.2rem 4.8rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 5.6rem 0 3.2rem 0;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const AuthCardLogoWrapper = styled.div`
  position: absolute;
  top: -3.3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-blue);
  border-radius: var(--rounded-2xl);
  padding: 1.2rem;
`;
