import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProductPreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6.625rem;
  padding: 9.125rem 0;

  @media (max-width: ${breakpoints.xl}) {
    justify-content: center;
    padding: 6.625rem 0;
    gap: 4.125rem;
  }
`;
