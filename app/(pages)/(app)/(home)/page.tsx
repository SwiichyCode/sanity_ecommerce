import { draftMode } from "next/headers";
import { recentProductFishQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import PreviewProvider from "@/app/_providers/PreviewProvider";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import ProductFeature from "./_components/ProductFeature";
import Testimonials from "./_components/Testimonials";

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
        {/* <Testimonials /> */}
      </PreviewProvider>
    );
  }

  return (
    <>
      <Hero />
      <Features />
      <ProductFeature productFeature={productFeature} />
      {/* <Testimonials /> */}
    </>
  );
}
