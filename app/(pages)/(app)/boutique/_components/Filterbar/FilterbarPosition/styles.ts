import styled from "styled-components";
import { BsFillGridFill, BsLayoutThreeColumns } from "react-icons/bs";

export const FilterBarIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const IconGrid = styled(BsFillGridFill).withConfig({
  // @ts-ignore
  shouldForwardProp: (prop) => !["position"].includes(prop),
})<{ position: string }>`
  color: ${({ position }) => (position === "grid" ? "#000" : "#ccc")};
  cursor: pointer;
`;

export const IconColumn = styled(BsLayoutThreeColumns).withConfig({
  // @ts-ignore
  shouldForwardProp: (prop) => !["position"].includes(prop),
})<{ position: string }>`
  color: ${({ position }) => (position === "column" ? "#000" : "#ccc")};
  cursor: pointer;
`;

export const Line = styled.div`
  width: 1px;
  height: 2.4rem;
  background-color: black;
`;
