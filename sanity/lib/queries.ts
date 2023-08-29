import { groq } from "next-sanity";

export const productQuery = groq`*[_type == "product"] | order(_createdAt desc){
    id, name, description, price, images
  }`;

export const recentProductQuery = groq`*[_type == "product"] | order(_createdAt desc){
    id, name, description, price, images
  }[0...3]`;

export const recentProductFishQuery = groq`*[_type == "product" && category->category == "poisson"] | order(date desc){
    id, name, description, price, images, stars, stock, category -> {
      category
    }
  }[0...3]`;
