import Image from "next/image";
import * as S from "./styles";

type Props = {
  stars: number;
};

export default function ProductCardStars({ stars }: Props) {
  return (
    <S.ProductCardStars>
      <Image src="/star.svg" width={16} height={16} alt="" />
      <span>{stars}</span>
    </S.ProductCardStars>
  );
}
