import { groq } from "next-sanity";

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

export const productsQuery = groq`*[_type == "product"] | order(_createdAt desc){
  ${productFields}
  }`;

export const getProductQuery = groq`*[_type == "product" && id == $id] | order(_createdAt desc){
  ${productFields}
  }`;

export const recentProductQuery = groq`*[_type == "product"] | order(_createdAt desc){
    id, name, description, price, images
  }[0...3]`;

export const recentProductFishQuery = groq`*[_type == "product" && category->category == "poisson"] | order(date desc){
    ${productFields}
  }[0...3]`;

export const productQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  ${productFields}
  }`;

export const productPathsQuery = groq`*[_type == "product" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;
