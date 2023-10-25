import { client } from "@/sanity/sanity-client";
import { groq } from "next-sanity";

const productFields = `
  id, name, slug, description, price, images, stars, stock, 
  "sizes": sizes[]-> {
    size,
    weight,
    price,
    "fishSpecies": fishSpecies-> {
      name
    }
  },
  weight,
  category,
  portabletext,
`;

const newproductFields = `
  id,
  name,
  slug,
  description,
  variants,
  images,
  category,
  portabletext
`;

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
    ${productFields}
    }`
  );
}

export const getProduct = async (slug: string) => {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
    ${productFields}
    }[0]`,
    { slug }
  );
};

export const getProductSlug = async () => {
  return client.fetch(
    groq`*[_type == "product" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`
  );
};

export const getRecentFish = async () => {
  return client.fetch(
    groq`*[_type == "product" && category == "poisson"] | order(date desc){
    ${productFields}
    }[0...3]`
  );
};

export const getNewProducts = async () => {
  return client.fetch(
    groq`*[_type == "newproduct"]{
    ${newproductFields}
    }`
  );
};

export const getNewProductSlug = async () => {
  return client.fetch(
    groq`*[_type == "newproduct" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`
  );
};

export const getNewProduct = async (slug: string) => {
  return client.fetch(
    groq`*[_type == "newproduct" && slug.current == $slug]{
    ${newproductFields}
    }[0]`,
    { slug }
  );
};
