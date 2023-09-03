import { useState } from "react";
import * as S from "./styles";

type Props = {
  sizes: Array<any>;
  onSizeSelect: (size: any) => void;
};

export default function ProductSize({ sizes, onSizeSelect }: Props) {
  const [selectedSize, setSelectedSize] = useState(null);

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
            {size.size}cm
          </S.ProductSizeLabel>
        ))}
      </S.ProductSizeList>
    </S.ProductSizeWrapper>
  );
}
