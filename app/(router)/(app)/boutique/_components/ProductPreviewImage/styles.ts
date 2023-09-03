import styled from "styled-components";

export const ProductPreviewImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageURL"].includes(prop),
})<{ imageURL: string }>`
  width: 500px;
  height: 500px;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
