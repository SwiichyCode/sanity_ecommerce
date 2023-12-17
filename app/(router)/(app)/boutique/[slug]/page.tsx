import { getProduct, getProductSlug } from "@/sanity/query/product-query";
import ProductPreview from "./_components/ProductPreview";

export const revalidate = 10;

export async function generateStaticParams() {
  const slug = await getProductSlug();
  return slug;
}

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.slug);

  return <ProductPreview product={product} />;
}
