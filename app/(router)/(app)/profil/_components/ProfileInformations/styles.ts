import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProfilHeader = styled.div``;

export const ProfilTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.2rem;
`;

export const ProfilTitleInformations = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  margin: 2.8rem 0;
`;

export const ProfilInformations = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ProfilItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: initial;

    & button {
      padding: 0;
    }
  }
`;

export const ProfilItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
`;

export const ProfilItemLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
`;

export const ProfilItemValue = styled.input`
  border: none;
  display: block;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.6rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const ProfilteItemValueTest = styled.p`
  /* max-width: 20rem; */
  width: auto;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.6rem;
  overflow: hidden;
`;

export const ProfilItemAction = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #0080ff;
  cursor: pointer;

  &.confirmation {
    color: #00c48c;
  }
  &.cancel {
    color: #ff0000;
  }
`;

export const SuccessMessage = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4rem;
  color: #00c48c;
`;
