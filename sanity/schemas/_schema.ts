// Purpose: Defines the schema for Sanity Studio.
import { type SchemaTypeDefinition } from "sanity";

import product from "./product-schema";
import category from "./category-schema";
import size from "./size-schema";
import species from "./species-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, size, species],
};
