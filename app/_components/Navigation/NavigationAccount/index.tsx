import styled from "styled-components";
import Link from "next/link";
import { NavigationLink } from "../styles";
import { useWindowSize } from "usehooks-ts";
import { FiUser } from "react-icons/fi";

const NavigationAccountLink = styled(FiUser)`
  font-size: 2.8rem;
`;

export default function NavigationAccount() {
  const { width } = useWindowSize();

  return (
    <NavigationLink href="/profil">
      {width > 1280 ? "Mon compte" : <NavigationAccountLink />}
    </NavigationLink>
  );
}
