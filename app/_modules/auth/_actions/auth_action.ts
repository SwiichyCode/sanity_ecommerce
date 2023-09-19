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

type Props = {
  formData: Inputs;
  isSignUp: boolean;
  isCheckout: boolean | undefined;
};

export async function authAction({ formData, isSignUp, isCheckout }: Props) {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;

  const requestUrl = new URL(url);
  const supabase = createRouteHandlerClient({ cookies });

  const result = isSignUp
    ? FormDataSchema.safeParse(formData)
    : SigninDataSchema.safeParse(formData);

  if (result.success) {
    const { error } = isSignUp
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

    return isSignUp
      ? redirect(
          `${requestUrl.origin}/signin?message=Verifiez vos e-mails pour continuer le processus de connexion`
        )
      : isCheckout
      ? redirect(`${requestUrl.origin}/cart`)
      : redirect(requestUrl.origin);
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
