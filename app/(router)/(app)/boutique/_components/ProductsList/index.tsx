"use client";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import { useFilterBarStore } from "../Filterbar/useFilterBarStore";
import { usePaginationStore } from "../Pagination/usePaginationStore";
import ProductCard from "../ProductCard";
import Pagination from "../Pagination";
import * as S from "./styles";

type Props = {
  products?: any;
};

export default function ProductsList({ products }: Props) {
  const { searchQuery, selectedCategory, position } = useFilterBarStore();
  const { page, indexOfFirstProduct, indexOfLastProduct } =
    usePaginationStore();

  const filteredProducts = products.filter((product: any) => {
    const isMatchingCategory =
      selectedCategory === "" || product.category.category === selectedCategory;

    const isMatchingSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return isMatchingCategory && isMatchingSearch;
  });

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct(page),
    indexOfLastProduct(page)
  );

  const renderList = ({ children }: { children: React.ReactNode }) => {
    return position === "grid" ? (
      <S.ProductsListGrid products={products}>{children}</S.ProductsListGrid>
    ) : (
      <S.ProductsListColumn>{children}</S.ProductsListColumn>
    );
  };

  return (
    <S.ProductsListWrapper className="responsive-padding">
      {renderList({
        children: currentProducts.map((product: any) => (
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
            category={product.category.category}
          />
        )),
      })}
      <Pagination filteredProducts={filteredProducts} />
    </S.ProductsListWrapper>
  );
}
