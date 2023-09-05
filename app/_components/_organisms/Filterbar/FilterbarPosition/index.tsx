import { BsFillGridFill, BsLayoutThreeColumns } from "react-icons/bs";
import { AiOutlineBars, AiOutlineAppstore } from "react-icons/ai";
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
        <AiOutlineAppstore />
      </S.FilterBarIcon>
      <S.FilterBarIcon
        onClick={() => handleIconClick("column")}
        active={position === "column"}
      >
        <AiOutlineBars />
      </S.FilterBarIcon>

      <S.Line />
    </S.FilterBarIconWrapper>
  );
}
