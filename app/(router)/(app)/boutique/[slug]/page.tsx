import { getNewProduct, getNewProductSlug } from "@/sanity/query/product-query";
import ProductPreview from "./_components/ProductPreview";

export const revalidate = 10;

export async function generateStaticParams() {
  const slug = await getNewProductSlug();
  return slug;
}

export default async function ProductPage({ params }: any) {
  const product = await getNewProduct(params.slug);

  return <ProductPreview product={product} />;
}
