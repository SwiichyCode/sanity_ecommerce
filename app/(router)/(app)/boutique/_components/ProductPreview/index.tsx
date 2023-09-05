"use client";
import { urlForImage } from "@/sanity/lib/image";
import ProductPreviewImage from "../ProductPreviewImage";
import ProductPreviewInformations from "../ProductPreviewInformations";
import * as S from "./styles";

type Props = {
  product: any;
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
