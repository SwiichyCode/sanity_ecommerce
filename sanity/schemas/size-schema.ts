import { defineType, defineField } from "sanity";

export default defineType({
  name: "fishSize",
  title: "Fish Size",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "size",
      title: "Size (in inches)",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "fishSpecies",
      title: "Fish Species",
      type: "reference",
      to: [{ type: "fishSpecies" }],
      description: "Select the species of fish associated with this size.",
    }),
  ],
});
