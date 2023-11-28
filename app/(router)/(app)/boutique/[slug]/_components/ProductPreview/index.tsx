"use client";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import ProductPreviewImage from "../ProductPreviewImage";
import ProductPreviewInformations from "../ProductPreviewInformations";
import type { ProductType } from "@/sanity/types/product-type";
import * as S from "./styles";

type Props = {
  product: ProductType;
};

export default function ProductPreview({ product }: Props) {
  return (
    <S.ProductPreviewWrapper>
      <ProductPreviewImage
        imageURL={urlForImage(product.images[0])
          .auto("format")
          .fit("max")
          .url()}
      />
      <ProductPreviewInformations product={product} />
    </S.ProductPreviewWrapper>
  );
}
