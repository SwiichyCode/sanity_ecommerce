import { draftMode } from "next/headers";
import { recentProductFishQuery } from "@/sanity/lib/queries";
import PreviewProvider from "@/app/_providers/PreviewProvider";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import ProductFeature from "./_components/ProductFeature";
import { getCachedClient } from "@/sanity/lib/getClient";

export default async function HomePage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;

  const productFeature = await getCachedClient(preview)(recentProductFishQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <Hero />
        <Features />
        <ProductFeature productFeature={productFeature} />
      </PreviewProvider>
    );
  }

  return (
    <>
      <Hero />
      <Features />
      <ProductFeature productFeature={productFeature} />
    </>
  );
}
