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
      name: "weight",
      title: "Poids du produit (en grammes ou kilogrammes)",
      type: "number",
      hidden: ({ parent }) => parent?.category === "poisson",
    }),
    defineField({
      name: "sizes",
      title: "Tailles disponibles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "fishSize" }] }],
      description: "Select the sizes available for this product.",
      hidden: ({ parent }) => parent?.category !== "poisson",
    }),
    defineField({
      name: "images",
      title: "Images du produit",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: {
        layout: "grid",
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category du produit",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Poisson", value: "poisson" },
          { title: "Matériel", value: "matériel" },
          { title: "Nourriture", value: "nourriture" },
        ],
      },
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
    defineField({
      name: "portabletext",
      title: "Portable text",
      type: "array",
      of: [{ type: "block" }],
      // validation: (Rule) => Rule.required(),
    }),
  ],
});
