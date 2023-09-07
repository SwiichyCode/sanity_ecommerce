import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "x4x0ku3u",
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
});
