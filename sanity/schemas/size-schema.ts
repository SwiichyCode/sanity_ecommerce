import { defineType, defineField } from "sanity";

export default defineType({
  name: "fishSize",
  title: "Tailles de poisson",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Taille + Nom du produit (ex: medium - discus blue)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "size",
      title: "Taille (en centimètres)",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prix en fonction de la taille (en euros)",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fishSpecies",
      title: "Race de poisson",
      type: "reference",
      to: [{ type: "fishSpecies" }],
      description: "Select the species of fish associated with this size.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
