"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormDataSchema } from "../_schema/schema";
import { z } from "zod";

export type FormData = {
  email: string;
  password: string;
};

type Inputs = z.infer<typeof FormDataSchema>;

export async function signinAction(request: string, data: Inputs) {
  const requestUrl = new URL(request);
  const supabase = createRouteHandlerClient({ cookies });

  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    const { error } = await supabase.auth.signInWithPassword({
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      redirect(
        `${requestUrl.origin}/signin?error=Impossible d'authentifier l'utilisateur`
      );
    }

    return redirect(requestUrl.origin);
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
