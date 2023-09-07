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
    }`,
    {
      Headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, Content-Type, Accept, Authorization, X-Request-With",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );
}
