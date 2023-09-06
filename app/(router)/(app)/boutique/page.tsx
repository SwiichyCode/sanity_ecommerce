import { draftMode } from "next/headers";
import PreviewProvider from "@/sanity/providers/PreviewProvider";
import { productsQuery } from "@/sanity/lib/queries";
import { cachedClient } from "@/sanity/lib/client";
import { getCachedClient } from "@/sanity/lib/getClient";
import Banner from "../../../_components/_organisms/Banner";
import FilterBar from "@/app/_components/_organisms/Filterbar";
import ProductsList from "../../../_components/_organisms/ProductsList";
import { generateFakeProducts } from "@/app/_mocks/productsFaker";

export const dynamic = "force-dynamic";

export default async function BoutiquePage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;

  const products = await getCachedClient(preview)(productsQuery);

  // const products = generateFakeProducts(100);
  // console.log(products);

  // if (preview && preview.token) {
  //   return (
  //     <PreviewProvider token={preview.token}>
  //       <Banner />
  //       <FilterBar />
  //       <ProductsList products={products} />
  //     </PreviewProvider>
  //   );
  // }

  return (
    <div>
      <Banner />
      <FilterBar />
      <ProductsList products={products} />
    </div>
  );
}
