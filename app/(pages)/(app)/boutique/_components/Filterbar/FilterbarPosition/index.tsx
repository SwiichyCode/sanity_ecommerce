import * as S from "./styles";

type Props = {
  position: "grid" | "column";
  setPosition: (position: "grid" | "column") => void;
};

export default function FilterbarPosition({ position, setPosition }: Props) {
  return (
    <S.FilterBarIconWrapper>
      <S.IconGrid onClick={() => setPosition("grid")} position={position} />
      <S.IconColumn onClick={() => setPosition("column")} position={position} />
      <S.Line />
    </S.FilterBarIconWrapper>
  );
}
