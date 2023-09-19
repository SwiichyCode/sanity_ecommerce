import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "zip",
      title: "Code postal",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socials",
      title: "Réseaux sociaux",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Nom",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      description: "Choisissez les réseaux sociaux à afficher.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
