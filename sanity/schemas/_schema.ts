import { type SchemaTypeDefinition } from "sanity";

import products from "./product-schema";
import contact from "./contact-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, contact],
};
