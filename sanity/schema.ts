// Purpose: Defines the schema for Sanity Studio.
import { type SchemaTypeDefinition } from "sanity";

import product from "./schemas/product";
import category from "./schemas/category";
import size from "./schemas/size";
import species from "./schemas/species";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, size, species],
};
