import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const HeaderRightSideWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export default function HeaderRightSide({ children }: Props) {
  return <HeaderRightSideWrapper>{children}</HeaderRightSideWrapper>;
}
