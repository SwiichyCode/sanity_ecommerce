import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const HeaderLeftSideWrapper = styled.div`
  float: left;
`;

export default function HeaderLeftSide({ children }: Props) {
  return <HeaderLeftSideWrapper>{children}</HeaderLeftSideWrapper>;
}
