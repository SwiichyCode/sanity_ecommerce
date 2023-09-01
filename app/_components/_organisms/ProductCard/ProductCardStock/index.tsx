import Image from "next/image";
import * as S from "./styles";

type Props = {
  stock: number;
};

export default function ProductCardStock({ stock }: Props) {
  return (
    <S.ProductCardStock>
      <Image src="/stocks.svg" width={24} height={24} alt="" />
      <span>{stock > 0 ? `${stock} en stock` : "Indisponible"}</span>
    </S.ProductCardStock>
  );
}
