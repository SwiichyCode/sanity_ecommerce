import { z } from "zod";

export const FormDataSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  password: z.string().min(8),
});
