"use client";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import { useFilterBarStore } from "../Filterbar/useFilterBarStore";
import { usePaginationStore } from "../Pagination/usePaginationStore";
import ProductCard from "../ProductCard";
import Pagination from "../Pagination";
import type { ProductType } from "@/sanity/types/product-type";
import * as S from "./styles";

type Props = {
  products: ProductType[];
};

export default function ProductsList({ products }: Props) {
  const { searchQuery, selectedCategory, position } = useFilterBarStore();
  const { page, indexOfFirstProduct, indexOfLastProduct } =
    usePaginationStore();

  const filteredProductStock = products.filter(
    (product) =>
      product.variants.map((variant) => variant.stock).reduce((a, b) => a + b) >
      0
  );

  const filteredProducts = filteredProductStock.filter((product: any) => {
    const isMatchingCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const isMatchingSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return isMatchingCategory && isMatchingSearch;
  });

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct(page),
    indexOfLastProduct(page)
  );

  return (
    <S.ProductsListWrapper className="responsive-padding">
      <S.ProductsListGrid>
        {currentProducts.map((product) => (
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
      </S.ProductsListGrid>

      <Pagination filteredProducts={filteredProducts} />
    </S.ProductsListWrapper>
  );
}
