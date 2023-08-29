import { groq } from "next-sanity";

const productFields = `
  id, name, description, price, images, stars, stock, category -> {
    category
  }
`;

export const productQuery = groq`*[_type == "product"] | order(_createdAt desc){
  ${productFields}
    
  }`;

export const recentProductQuery = groq`*[_type == "product"] | order(_createdAt desc){
    id, name, description, price, images
  }[0...3]`;

export const recentProductFishQuery = groq`*[_type == "product" && category->category == "poisson"] | order(date desc){
    ${productFields}
  }[0...3]`;
