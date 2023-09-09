import { client } from "@/sanity/sanity-client";

export async function getCategoryName(id: string) {
  const [category] = await client.fetch(
    `*[_type == "category" && id == $id] {
        category,
        }`,
    { id }
  );

  return category;
}
