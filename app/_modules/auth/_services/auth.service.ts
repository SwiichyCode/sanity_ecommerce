import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `http://localhost:3000/reset-password`,
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
};

export default AuthServices;
