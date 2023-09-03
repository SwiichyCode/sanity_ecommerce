import { defineType, defineField } from "sanity";

export default defineType({
  name: "fishSpecies",
  title: "Fish Species",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    // Vous pouvez ajouter d'autres champs pertinents pour les espèces de poissons
  ],
});
