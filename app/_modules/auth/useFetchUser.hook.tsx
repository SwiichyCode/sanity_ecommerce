import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function useFetchUser() {
  const supabase = createClientComponentClient();

  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user && user.aud === "authenticated" ? user : null;
  };

  return {
    fetchUser,
  };
}
