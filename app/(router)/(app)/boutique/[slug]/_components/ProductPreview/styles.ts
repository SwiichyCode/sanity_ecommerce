import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProductPreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10.6rem;
  padding: 14.6rem 0;

  @media (max-width: ${breakpoints.xl}) {
    justify-content: center;
    padding: 10.6rem 0;
    gap: 6.6rem;
  }
`;
