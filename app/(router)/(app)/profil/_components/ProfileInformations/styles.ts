import styled from "styled-components";

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

export const ProfilInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ProfilItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilItemWrapper = styled.div`
  display: flex;

  gap: 0.8rem;
`;

export const ProfilItemLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
`;

export const ProfilItemValue = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6rem;
`;

export const ProfilItemAction = styled.p`
  color: #0080ff;
  cursor: pointer;
`;
