import { groq } from "next-sanity";

export const stackQuery = groq`*[_type == "stack" && visible == true] | order(order desc) {
    language, years, order, icon
  }`;

export const projectQuery = groq`*[_type == "project"] | order(date desc){
    title, description, stack[]->{
      language
    }, images, liveUrl, githubUrl, date
  }`;

export const productQuery = groq`*[_type == "product"] | order(_createdAt desc){
    id, name, description, price, images
  }`;

export const recentProductQuery = groq`*[_type == "product"] | order(_createdAt desc){
    id, name, description, price, images
  }[0...3]`;

export const recentProductFishQuery = groq`*[_type == "product" && category->category == "poisson"] | order(_createdAt desc){
    id, name, description, price, images, stars, stock, category -> {
      category
    }
  }[0...3]`;
