import { productPathsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import ProductPreview from "../_components/ProductPreview";
import { getProduct } from "@/sanity/sanity-utils";

export const revalidate = 10;

export async function generateStaticParams() {
  const products = await client.fetch(productPathsQuery);
  return products;
}

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.slug);

  return <ProductPreview product={product} />;
}
