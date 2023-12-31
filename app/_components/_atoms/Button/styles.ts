import styled from "styled-components";

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["width"].includes(prop),
})<{ width: "full" | "auto" | undefined }>`
  width: ${(props) => (props.width === "full" ? "100%" : "max-content")};
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-white);
  font-family: Poppins;
  background-color: #00457e;
  border-radius: var(--rounded-md);
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  border: none;
  padding: 1.125rem 1.125rem;
  transition: background-color 0.2s ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  & > a {
    color: var(--color-white);
    text-decoration: none;
  }

  &:hover {
    background-color: var(--color-blue-hover);
  }

  &:disabled {
    background-color: #b3b3b3;
    cursor: not-allowed;
  }
`;
