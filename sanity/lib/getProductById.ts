import { client } from "@/sanity/lib/client";

export async function getProductById(id: string) {
  const [product] = await client.fetch(
    `*[_type == "product" && id == $id] {
      id,
      name,
      description,
      price,
      images,
    }`,
    { id }
  );

  return product;
}
