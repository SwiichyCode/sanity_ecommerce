import { client } from "@/sanity/sanity-client";
import { groq } from "next-sanity";

const productFields = `
  id,
  name,
  slug,
  description,
  variants,
  images,
  category,
  portabletext
`;

export const getRecentFish = async () => {
  return client.fetch(
    groq`*[_type == "products" && category == "poisson"] | order(date desc){
    ${productFields}
    }[0...3]`
  );
};

export const getNewProducts = async () => {
  return client.fetch(
    groq`*[_type == "products"]{
    ${productFields}
    }`
  );
};

export const getNewProductSlug = async () => {
  return client.fetch(
    groq`*[_type == "products" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`
  );
};

export const getNewProduct = async (slug: string) => {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug]{
    ${productFields}
    }[0]`,
    { slug }
  );
};
