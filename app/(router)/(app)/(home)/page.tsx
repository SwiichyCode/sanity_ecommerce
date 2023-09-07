import Features from "./_components/Features";
import Hero from "./_components/Hero";
import ProductFeature from "./_components/ProductFeature";
import { getRecentFish } from "@/sanity/query/product-query";

export const revalidate = 10;

export default async function HomePage() {
  const productFeature = await getRecentFish();

  return (
    <>
      <Hero />
      <Features />
      <ProductFeature productFeature={productFeature} />
    </>
  );
}
