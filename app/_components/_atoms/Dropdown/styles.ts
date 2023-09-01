import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const DropdownWrapper = styled.div`
  width: 100%;
  max-width: 16.6rem;
  position: relative;
`;

export const DropdownResult = styled.div`
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  letter-spacing: -0.1rem;
  padding: 0.8rem 1.6rem;
  background-color: var(--color-white);
  color: var(--color-text);
  text-transform: capitalize;
  font-weight: 500;
  border-radius: var(--rounded-lg);
  border: 1px solid var(--color-grey-200);
  user-select: none;
  gap: 0.8rem;
  cursor: pointer;

  & > span {
    pointer-events: none;
  }
`;

export const DropdownList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: calc(100% + 0.8rem);
  left: 0;
  width: 100%;
  /* height: 200px; */
  border-radius: var(--rounded-lg);
  border: 1px solid var(--color-grey-200);
  background-color: white;
  box-shadow: var(--shadow);
  z-index: 9999;
`;

export const DropdownItem = styled.li`
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  letter-spacing: -0.1rem;
  color: var(--color-text);
  text-transform: capitalize;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: var(--rounded-lg);
    border-top-right-radius: var(--rounded-lg);
  }

  &:last-child {
    border-bottom-left-radius: var(--rounded-lg);
    border-bottom-right-radius: var(--rounded-lg);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

export const DropdownArrow = styled(MdOutlineKeyboardArrowRight).withConfig({
  // @ts-ignore
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<{ isOpen: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0)")};
  pointer-events: none;
`;
