import { getProducts } from "@/sanity/query/product-query";
import Banner from "./_components/Banner";
import FilterBar from "./_components/Filterbar";
import ProductsList from "./_components/ProductsList";

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
