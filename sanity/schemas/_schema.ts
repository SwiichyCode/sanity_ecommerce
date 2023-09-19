import { type SchemaTypeDefinition } from "sanity";
import product from "./product-schema";
import size from "./size-schema";
import species from "./species-schema";
import contact from "./contact-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, size, species, contact],
};
