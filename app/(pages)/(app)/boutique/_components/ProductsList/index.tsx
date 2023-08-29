"use client";
import { useFilterBarStore } from "../Filterbar/useFilterBarStore";
import { usePaginationStore } from "../Pagination/usePaginationStore";
import { urlForImage } from "@/sanity/lib/image";
import ProductCard from "@/app/_components/ProductCard";
import { generateFakeProducts } from "@/app/_mocks/productsFaker";

import Pagination from "../Pagination";
import * as S from "./styles";

type Props = {
  products?: any;
};

export default function ProductsList({ products: t }: Props) {
  const { filter, selectedCategory, position } = useFilterBarStore();
  const { page, indexOfFirstProduct, indexOfLastProduct } =
    usePaginationStore();

  const products = generateFakeProducts(20);

  const renderList = ({ children }: { children: React.ReactNode }) => {
    return position === "grid" ? (
      <S.ProductsListGrid>{children}</S.ProductsListGrid>
    ) : (
      <S.ProductsListColumn>{children}</S.ProductsListColumn>
    );
  };

  const filteredProducts = products.filter((product: any) => {
    const isMatchingCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const isMatchingFilter = product.name
      .toLowerCase()
      .includes(filter.toLowerCase());

    return isMatchingCategory && isMatchingFilter;
  });

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct(page),
    indexOfLastProduct(page)
  );

  return (
    <S.ProductsListWrapper>
      {renderList({
        children: currentProducts.map((product: any, index: number) => (
          <ProductCard
            key={product.id}
            // imageURL={urlForImage(product.images[0])
            //   .auto("format")
            //   .fit("max")
            //   .url()}
            imageURL={product.images}
            id={product.id}
            name={product.name}
            description={product.description}
            stars={product.stars}
            stock={product.stock}
            price={product.price}
          />
        )),
      })}
      <Pagination filteredProducts={filteredProducts} />
    </S.ProductsListWrapper>
  );
}
