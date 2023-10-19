import { useState } from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import ProductSize from "../ProductSize";
import ProductActions from "../ProductActions";
import { windowLocation } from "@/app/_utils/windowLocation";
import Button from "@/app/_components/_atoms/Button";
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

  const components: PortableTextComponents = {
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
    },

    list: ({ children }) => (
      <ul className=" flex flex-col gap-4">{children}</ul>
    ),
  };

  return (
    <S.ProductPreviewInformationsWrapper>
      <S.ProductTitle>{product.name}</S.ProductTitle>
      <S.Container>
        <S.ProductPrice>
          {sizes.price ? sizes.price : product.price}€
        </S.ProductPrice>
        <ProductActions
          sizes={sizes}
          setErrorSize={setErrorSize}
          product={product}
        />
      </S.Container>
      <S.ProductDescription>
        <PortableText value={product.portabletext} components={components} />
      </S.ProductDescription>
      {product.sizes && (
        <ProductSize
          sizes={product.sizes}
          errorSize={errorSize}
          onSizeSelect={handleSizeSelect}
        />
      )}

      <S.LocationAction>
        <Button
          text="Passer la commande"
          onClick={() => windowLocation("/cart")}
        />
        <S.SpanLink onClick={() => windowLocation("/boutique")}>
          Retour à la boutique
        </S.SpanLink>
      </S.LocationAction>
    </S.ProductPreviewInformationsWrapper>
  );
}
