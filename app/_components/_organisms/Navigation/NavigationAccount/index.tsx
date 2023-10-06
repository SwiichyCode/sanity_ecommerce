import styled from "styled-components";
import { NavigationLink } from "../styles";
import { useWindowSize } from "usehooks-ts";
import { FiUser } from "react-icons/fi";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

const NavigationAccountLink = styled(FiUser)`
  font-size: 1.75rem;
`;

export default function NavigationAccount() {
  const { width } = useWindowSize();

  return (
    <NavigationLink href={URL_CONSTANT.PROFIL}>
      {width > 1280 ? "Mon compte" : <NavigationAccountLink />}
    </NavigationLink>
  );
}
