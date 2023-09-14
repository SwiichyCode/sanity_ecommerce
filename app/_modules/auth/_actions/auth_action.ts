"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormDataSchema, SigninDataSchema } from "../_schema/schema";
import { z } from "zod";

export type FormData = {
  email: string;
  password: string;
};

type Inputs = z.infer<typeof FormDataSchema>;

export async function authAction(
  request: string,
  data: Inputs,
  isSignup: boolean
) {
  const requestUrl = new URL(request);
  const supabase = createRouteHandlerClient({ cookies });

  const result = isSignup
    ? FormDataSchema.safeParse(data)
    : SigninDataSchema.safeParse(data);

  if (result.success) {
    const { error } = isSignup
      ? await supabase.auth.signUp({
          email: result.data.email,
          password: result.data.password,
          options: {
            emailRedirectTo: `${requestUrl.origin}/auth/callback`,
          },
        })
      : await supabase.auth.signInWithPassword({
          email: result.data.email,
          password: result.data.password,
        });

    if (error) {
      redirect(
        `${requestUrl.origin}/signin?error=Impossible d'authentifier l'utilisateur`
      );
    }

    return isSignup
      ? redirect(
          `${requestUrl.origin}/signin?message=Verifiez vos e-mails pour continuer le processus de connexion`
        )
      : redirect(requestUrl.origin);
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
