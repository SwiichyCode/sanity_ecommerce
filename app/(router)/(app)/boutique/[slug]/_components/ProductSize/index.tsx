import { useState } from "react";
import * as S from "./styles";

type Props = {
  sizes: Array<number>;
  sizesUnit: Array<string>;
  errorSize: string | null;
  onSizeSelect: (size: any) => void;
};

export default function ProductSize({
  sizes,
  sizesUnit,
  errorSize,
  onSizeSelect,
}: Props) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeSelect = (size: any) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  return (
    <S.ProductSizeWrapper>
      <S.ProductSizeTitle>Sélectionnez une taille :</S.ProductSizeTitle>
      <S.ProductSizeList>
        {sizes.map((size, index) => (
          <S.ProductSizeLabel key={index}>
            <input
              type="radio"
              value={size}
              checked={selectedSize === size}
              onChange={() => handleSizeSelect(size)}
            />
            {size}
            {sizesUnit[index]}
          </S.ProductSizeLabel>
        ))}
      </S.ProductSizeList>
      <S.ErrorMessage>{errorSize}</S.ErrorMessage>
    </S.ProductSizeWrapper>
  );
}
