import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "x4x0ku3u",
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
});

const productFields = `
  id, name, slug, description, price, images, stars, stock, 
  "sizes": sizes[]-> {
    size,
    price,
    "fishSpecies": fishSpecies-> {
      name
    }
  },
  category -> { category, 
  }
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

export const getRecentFish = async () => {
  return client.fetch(
    groq`*[_type == "product" && category->category == "poisson"] | order(date desc){
    ${productFields}
    }[0...3]`
  );
};
