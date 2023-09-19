import { z } from "zod";

export const FormDataSchema = z
  .object({
    email: z.string().email("Veuillez entrer une adresse email valide"),
    password: z.string().min(8),
    confirm: z.string().min(8).optional(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm"],
  });

export const SigninDataSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  password: z.string().min(8),
});

export const ResetPasswordDataSchema = z
  .object({
    password: z.string().min(8),
    confirm: z.string().min(8).optional(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm"],
  });
