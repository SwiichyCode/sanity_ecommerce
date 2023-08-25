import { productQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";

export default async function BoutiquePage() {
  const products = await sanityFetch<SanityDocument[]>({
    query: productQuery,
  });

  return (
    <div>
      <h1>Boutique Page</h1>
      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
