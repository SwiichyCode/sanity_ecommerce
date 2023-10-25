import { type SchemaTypeDefinition } from "sanity";
import product from "./product-schema";
import size from "./size-schema";
import species from "./species-schema";
import contact from "./contact-schema";
import newproduct from "./newproduct-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newproduct, product, size, species, contact],
};
