import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const SummaryWrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  max-height: 61.2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--rounded-lg);
  padding: 3.2rem;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 55.4rem;
  }
`;

export const SummaryHeader = styled.div`
  margin-bottom: 3.2rem;
`;

export const SummaryTitle = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
`;

export const SummaryList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["cartLength"].includes(prop),
})<{ cartLength: number }>`
  flex: 1;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ cartLength }) =>
    cartLength > 0 ? "flex-start" : "center"};
  gap: 2.4rem;
`;

export const SummaryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const SummaryItemQuantity = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: var(--color-grey-600);
`;

export const SummaryFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: auto;

  & > :first-child {
    margin-bottom: 3.2rem;
  }

  & > button {
    width: 100%;
  }
`;

export const SummaryAlert = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: var(--color-red);
`;
