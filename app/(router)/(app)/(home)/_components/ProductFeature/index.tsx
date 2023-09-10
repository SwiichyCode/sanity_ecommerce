"use client";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import ProductCard from "@/app/(router)/(app)/boutique/_components/ProductCard";
import SectionLayout from "@/app/_components/layouts/SectionLayout";
import * as S from "./styles";

type ProductFeatureProps = {
  productFeature: any;
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
              productFeature.map((product: any) => (
                <ProductCard
                  key={product.id}
                  imageURL={urlForImage(product.images[0]).url()}
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  description={product.description}
                  stars={product.stars}
                  stock={product.stock}
                  price={product.price}
                  category={product.category}
                />
              ))}
          </S.ProductFeatureList>
        </S.ProductFeatureContent>
      </S.ProductFeatureWrapper>
    </SectionLayout>
  );
}
