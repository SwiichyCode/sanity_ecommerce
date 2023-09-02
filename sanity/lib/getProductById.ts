import { client } from "@/sanity/lib/client";
import { dataset, projectId } from "../env";

export async function getProductById(id: string) {
  const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

  const product = await client.fetch(
    `*[_type == "product" && id == $id] {
      id,
      name,
      price,
      description,
      slug,
      "image": image.asset->url,
      "stock": stock
    }`,
    { id }
  );

  return product;
}
