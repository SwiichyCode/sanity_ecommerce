import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

async function signUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });

  return { error };
}

async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (data) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return { data, error };
}

async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${location.origin}/reset}`,
  });

  return { error };
}

async function signOut() {
  await supabase.auth.signOut();

  localStorage.removeItem("user");
}

const AuthServices = {
  signUp,
  signIn,
  resetPassword,
  signOut,
};

export default AuthServices;
