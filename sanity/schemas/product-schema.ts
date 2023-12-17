import { defineField, defineType } from "sanity";
import { v4 as uuidv4 } from "uuid";

export default defineType({
  name: "products",
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
      name: "portabletext",
      title: "Informations complémentaires",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "Images du produit",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "variants",
      title: "Variantes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "size",
              title: "Taille",
              type: "number",
            },
            {
              name: "sizeUnit",
              title: "Unité de taille",
              type: "string",
            },
            {
              name: "price",
              title: "Prix",
              type: "number",
            },
            {
              name: "weight",
              title: "Poids",
              type: "number",
            },
            {
              name: "stock",
              title: "Stock",
              type: "number",
            },
          ],
        },
      ],

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
  ],
});
