import styled from "styled-components";

export const CartTableWrapper = styled.div`
  width: 100%;
  max-width: 91.7rem;
  display: flex;
  flex-direction: column;
`;

export const CartTableHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: var(--color-white);
  background-color: var(--color-blue);
  padding: 2.4rem 0;

  & > div:nth-child(1) {
    width: 52%;
  }

  & > div:nth-child(2) {
    width: 16%;
  }

  & > div:nth-child(3) {
    width: 16%;
  }

  & > div:nth-child(4) {
    width: 16%;
  }
`;

export const CartTableHeadItem = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const CartTableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTableBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;

  & > div:nth-child(1) {
    width: 52%;
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  & > div:nth-child(2) {
    width: 16%;
  }

  & > div:nth-child(3) {
    width: 16%;
  }

  & > div:nth-child(4) {
    width: 16%;
  }
`;

export const CartTableBodyItem = styled.div`
  color: var(--text-color);
  text-align: center;
  padding: 2.4rem 0;
`;

export const CartTableBodyItemImg = styled.div.withConfig({
  shouldForwardProp: (prop) => !["src"].includes(prop),
})<{ src: string }>`
  width: 12rem;
  height: 12rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 0.8rem;
`;

export const CartTableBodyItemTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
