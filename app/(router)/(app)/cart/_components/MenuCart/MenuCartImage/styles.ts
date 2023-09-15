import styled from "styled-components";

export const MenuCartImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imageURL"].includes(prop),
})<{ imageURL?: any }>`
  width: 4rem;
  height: 4rem;
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  background-position: center;
  border-radius: var(--rounded-lg);
`;
