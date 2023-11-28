"use client";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import ProductCard from "@/app/(router)/(app)/boutique/_components/ProductCard";
import SectionLayout from "@/app/_components/layouts/SectionLayout";
import { ProductType } from "@/sanity/types/product-type";
import * as S from "./styles";

type ProductFeatureProps = {
  productFeature: ProductType[];
};

export default function ProductFeature({
  productFeature,
}: ProductFeatureProps) {
  return (
    <SectionLayout>
      <S.ProductFeatureWrapper>
        <S.ProductFeatureContent>
          <S.ProductFeatureHeader>
            <S.ProductFeatureTitle>
              Retrouvez notre dernier arrivage
            </S.ProductFeatureTitle>

            <S.ProductFeatureDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              accusamus rem cumque excepturi adipisci maxime, alias distinctio
              dolores iusto, voluptatibus eveniet non ut modi necessitatibus!
              Blanditiis iusto necessitatibus aperiam minus!
            </S.ProductFeatureDescription>
          </S.ProductFeatureHeader>

          <S.ProductFeatureList>
            {productFeature &&
              productFeature.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  description={product.description}
                  images={urlForImage(product.images[0]).url()}
                  price={product.variants[0].price}
                  stock={product.variants
                    .map((variant) => variant.stock)
                    .reduce((a, b) => a + b)}
                  category={product.category}
                />
              ))}
          </S.ProductFeatureList>
        </S.ProductFeatureContent>
      </S.ProductFeatureWrapper>
    </SectionLayout>
  );
}
