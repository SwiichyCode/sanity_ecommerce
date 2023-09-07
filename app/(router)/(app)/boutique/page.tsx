// "use client";

import Banner from "../../../_components/_organisms/Banner";
import FilterBar from "@/app/_components/_organisms/Filterbar";
import ProductsList from "../../../_components/_organisms/ProductsList";
import { getProducts } from "@/sanity/sanity-utils";

export const revalidate = 10;

export default async function BoutiquePage() {
  const products = await getProducts();

  return (
    <div>
      <Banner />
      <FilterBar />
      <ProductsList products={products} />
    </div>
  );
}
