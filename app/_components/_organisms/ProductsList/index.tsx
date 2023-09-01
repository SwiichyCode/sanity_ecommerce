"use client";
import { useFilterBarStore } from "../Filterbar/useFilterBarStore";
import { usePaginationStore } from "../Pagination/usePaginationStore";
import { urlForImage } from "@/sanity/lib/image";
import ProductCard from "@/app/_components/_organisms/ProductCard";
import Pagination from "../Pagination";
import * as S from "./styles";

type Props = {
  products?: any;
};

export default function ProductsList({ products }: Props) {
  const { searchQuery, selectedCategory, position } = useFilterBarStore();
  const { page, indexOfFirstProduct, indexOfLastProduct } =
    usePaginationStore();

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
      {renderList({
        children: currentProducts.map((product: any, index: number) => (
          <ProductCard
            key={product.id}
            imageURL={urlForImage(product.images[0])
              .auto("format")
              .fit("max")
              .url()}
            // imageURL={product.images}
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
