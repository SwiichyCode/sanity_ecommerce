import { useState, useEffect } from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import ProductSize from "../ProductSize";
import ProductActions from "../ProductActions";
import { windowLocation } from "@/app/_utils/windowLocation";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";
import { ProductType } from "@/sanity/types/product-type";
import ProductCardStock from "../../../_components/ProductCard/ProductCardStock";

type Props = {
  product: ProductType;
};

export default function ProductPreviewInformations({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState<number>(
    product.variants[0].price
  );
  const [productSize, setProductSize] = useState<number>(
    product.variants[0].size
  );
  const [productStock, setProductStock] = useState<number>(
    product.variants[0].stock
  );
  const [errorSize, setErrorSize] = useState<string | null>(null);

  useEffect(() => {
    if (productSize) {
      const selectedVariant = product.variants.find(
        (variant) => variant.size === productSize
      );
      if (selectedVariant) {
        setProductPrice(selectedVariant.price);
        setProductStock(selectedVariant.stock);
      }
    }
  }, [productSize]);

  const handleSizeSelect = (selectedSize: any) => {
    setProductSize(selectedSize);
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

  console.log(productStock);

  return (
    <S.ProductPreviewInformationsWrapper>
      <S.ProductTitle>{product.name}</S.ProductTitle>
      <ProductSize
        sizes={product.variants.map(({ size }) => size)}
        sizesUnit={product.variants.map(({ sizeUnit }) => sizeUnit)}
        errorSize={errorSize}
        onSizeSelect={handleSizeSelect}
      />
      <ProductCardStock stock={productStock} />
      <S.Container>
        {productPrice !== null ? (
          <S.ProductPrice>
            {(productPrice * quantity).toFixed(2)}€
          </S.ProductPrice>
        ) : (
          <S.ProductPrice>Loading...</S.ProductPrice>
        )}
        <ProductActions
          quantity={quantity}
          setQuantity={setQuantity}
          productPrice={productPrice}
          productSize={productSize}
          setErrorSize={setErrorSize}
          product={product}
        />
      </S.Container>
      <S.ProductDescription>
        <PortableText
          value={product.portabletext as any}
          components={components}
        />
      </S.ProductDescription>

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
