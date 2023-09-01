import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const HeaderLeftSideWrapper = styled.div`
  float: right;
`;

export default function HeaderRightSide({ children }: Props) {
  return <HeaderLeftSideWrapper>{children}</HeaderLeftSideWrapper>;
}
