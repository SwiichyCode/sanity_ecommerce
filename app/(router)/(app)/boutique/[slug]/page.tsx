import { draftMode } from "next/headers";
import { productPathsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { getCachedClient } from "@/sanity/lib/getClient";
import { productQuery } from "@/sanity/lib/queries";
import ProductPreview from "../_components/ProductPreview";

export async function generateStaticParams() {
  const products = await client.fetch(productPathsQuery);

  return products;
}

export default async function Page({ params }: any) {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;

  const product = await getCachedClient(preview)(productQuery, params);

  return <ProductPreview product={product} />;
}
