import { defineField, defineType } from "sanity";
import { v4 as uuidv4 } from "uuid";

export default defineType({
  name: "product",
  title: "Produits",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      readOnly: true,
      // hidden: true,
      initialValue: uuidv4(),
    }),

    defineField({
      name: "slug",
      title: "Generation du slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Nom du produit",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description du produit",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prix du produit",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sizes",
      title: "Tailles disponibles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "fishSize" }] }],
      description: "Select the sizes available for this product.",
    }),
    defineField({
      name: "images",
      title: "Images du produit",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category du produit",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stars",
      title: "Stars",
      type: "number",
      hidden: true,
    }),
    defineField({
      name: "stock",
      title: "Quantité en stock",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
