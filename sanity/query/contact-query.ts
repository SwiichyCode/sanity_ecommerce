import { client } from "@/sanity/sanity-client";
import { groq } from "next-sanity";

const contactFields = `
    email,
    phone,
    address,
    city,
    zip,
    socials
`;

export async function getContact() {
  return client.fetch(
    groq`*[_type == "contact"]{
        ${contactFields}
        }`
  );
}
