import Features from "../../../_components/_organisms/Features";
import Hero from "../../../_components/_organisms/Hero";
import ProductFeature from "../../../_components/_organisms/ProductFeature";
import { getRecentFish } from "@/sanity/sanity-utils";

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
