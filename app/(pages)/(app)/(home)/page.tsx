import { draftMode } from "next/headers";
import { getCachedClient } from "@/sanity/lib/getClient";
import { recentProductFishQuery } from "@/sanity/lib/queries";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import ProductFeature from "./_components/ProductFeature";
import { sanityFetch, token } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { useLiveQuery } from "next-sanity/preview";
import PreviewProvider from "@/sanity/PreviewProvider";

export default async function HomePage() {
  const productFeature = await sanityFetch<SanityDocument[]>({
    query: recentProductFishQuery,
  });

  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
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
