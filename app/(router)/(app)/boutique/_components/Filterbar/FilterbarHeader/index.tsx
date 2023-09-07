import { IoOptionsOutline } from "react-icons/io5";
import * as S from "./styles";

export default function FilterbarHeader() {
  return (
    <S.FilterBarHeaderWrapper>
      <IoOptionsOutline />
      <S.FilterBarTitle>Filtre</S.FilterBarTitle>
    </S.FilterBarHeaderWrapper>
  );
}
