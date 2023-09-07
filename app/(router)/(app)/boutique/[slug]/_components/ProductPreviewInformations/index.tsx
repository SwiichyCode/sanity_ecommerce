import { useState } from "react";
import ProductSize from "../ProductSize";
import ProductStars from "../ProductStars";
import ProductActions from "../ProductActions";
import * as S from "./styles";

type Props = {
  product: any;
};

export default function ProductPreviewInformations({ product }: Props) {
  const [sizes, setSizes] = useState<any>([]);
  const [errorSize, setErrorSize] = useState<string | null>(null);

  const handleSizeSelect = (selectedSize: any) => {
    setSizes(selectedSize);
  };

  console.log(product);

  return (
    <S.ProductPreviewInformationsWrapper>
      <S.ProductTitle>{product.name}</S.ProductTitle>
      <S.ProductPrice>
        {sizes.price ? sizes.price : product.price}€
      </S.ProductPrice>
      <ProductStars stars={product.stars} />
      <S.ProductDescription>{product.description}</S.ProductDescription>
      {product.sizes && (
        <ProductSize
          sizes={product.sizes}
          errorSize={errorSize}
          onSizeSelect={handleSizeSelect}
        />
      )}
      <ProductActions
        sizes={sizes}
        setErrorSize={setErrorSize}
        product={product}
      />
    </S.ProductPreviewInformationsWrapper>
  );
}
