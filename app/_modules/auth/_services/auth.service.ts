import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerActionClient({ cookies });

async function signout() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `http://localhost:3000/api/auth/callback?next=/reset-password`,
  });

  return { error };
}

async function updatePassword(password: string) {
  const { error } = await supabase.auth.updateUser({
    password: password,
  });
  return { error };
}

const AuthServices = {
  resetPassword,
  updatePassword,
  signout,
};

export default AuthServices;
