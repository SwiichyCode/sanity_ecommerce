import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${location.origin}/reset}`,
  });

  return { error };
}

const AuthServices = {
  resetPassword,
};

export default AuthServices;
