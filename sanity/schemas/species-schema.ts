import { defineType, defineField } from "sanity";

export default defineType({
  name: "fishSpecies",
  title: "Races de poisson",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom de la race",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
