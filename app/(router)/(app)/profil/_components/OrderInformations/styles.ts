import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const OrderTable = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;

  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const OrderTableColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderTableHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const OrderTableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderTableItem = styled.div`
  font-size: 1rem;
`;
