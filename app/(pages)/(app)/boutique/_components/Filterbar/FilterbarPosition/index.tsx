import { BsFillGridFill, BsLayoutThreeColumns } from "react-icons/bs";
import * as S from "./styles";

type Props = {
  position: "grid" | "column";
  setPosition: (position: "grid" | "column") => void;
};

export default function FilterbarPosition({ position, setPosition }: Props) {
  const handleIconClick = (clickedPosition: "grid" | "column") => {
    if (position !== clickedPosition) {
      setPosition(clickedPosition);
    }
  };

  return (
    <S.FilterBarIconWrapper>
      <S.FilterBarIcon
        onClick={() => handleIconClick("grid")}
        active={position === "grid"}
      >
        <BsFillGridFill />
      </S.FilterBarIcon>
      <S.FilterBarIcon
        onClick={() => handleIconClick("column")}
        active={position === "column"}
      >
        <BsLayoutThreeColumns />
      </S.FilterBarIcon>

      <S.Line />
    </S.FilterBarIconWrapper>
  );
}
