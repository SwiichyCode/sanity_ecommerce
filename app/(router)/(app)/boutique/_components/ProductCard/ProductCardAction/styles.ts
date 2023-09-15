import Image from "next/image";
import styled from "styled-components";

export const ProductCardActionWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);

  gap: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const ProductCardActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: var(--color-white);
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`;

export const ProductCartActionIcon = styled(Image)``;
