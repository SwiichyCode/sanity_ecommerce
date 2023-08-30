import { draftMode } from "next/headers";
import PreviewProvider from "@/app/_providers/PreviewProvider";
import { productQuery } from "@/sanity/lib/queries";
import { getCachedClient } from "@/sanity/lib/getClient";
import Banner from "./_components/Banner";
import FilterBar from "./_components/Filterbar";
import ProductsList from "./_components/ProductsList";
import { generateFakeProducts } from "@/app/_mocks/productsFaker";

export default async function BoutiquePage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;

  const products = await getCachedClient(preview)(productQuery);

  // const products = generateFakeProducts(100);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <Banner />
        <FilterBar />
        <ProductsList products={products} />
      </PreviewProvider>
    );
  }

  return (
    <div>
      <Banner />
      <FilterBar />
      <ProductsList products={products} />
    </div>
  );
}
