import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const SummaryWrapper = styled.div`
  width: 100%;
  max-width: 21.875rem;
  max-height: 38.25rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--rounded-lg);
  padding: 2rem;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 34.625rem;
  }
`;

export const SummaryHeader = styled.div`
  margin-bottom: 2rem;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const SummaryList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["cartLength"].includes(prop),
})<{ cartLength: number }>`
  flex: 1;
  min-height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ cartLength }) =>
    cartLength > 0 ? "flex-start" : "center"};
  gap: 1.5rem;
`;

export const SummaryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SummaryItemQuantity = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 0.875rem;
  color: var(--color-grey-600);
`;

export const SummaryFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;

  & > :first-child {
    margin-bottom: 2rem;
  }

  & > button {
    width: 100%;
  }
`;

export const SummaryAlert = styled.p`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  color: var(--color-red);
`;

export const SummaryMessage = styled.p`
  font-size: 0.875rem;
  padding: 1rem 0;
`;
