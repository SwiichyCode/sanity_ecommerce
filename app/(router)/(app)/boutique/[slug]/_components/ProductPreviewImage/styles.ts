import styled from "styled-components";
import { breakpoints } from "@/app/_styles/breakpoints";

export const ProductPreviewImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageURL"].includes(prop),
})<{ imageURL: string }>`
  width: 31.25rem;
  height: 31.25rem;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    height: 12.5rem;
  }
`;
