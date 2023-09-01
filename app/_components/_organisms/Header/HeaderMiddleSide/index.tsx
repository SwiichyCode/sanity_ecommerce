import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const HeaderMiddleSideWrapper = styled.div`
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function HeaderMiddleSide({ children }: Props) {
  return <HeaderMiddleSideWrapper>{children}</HeaderMiddleSideWrapper>;
}
