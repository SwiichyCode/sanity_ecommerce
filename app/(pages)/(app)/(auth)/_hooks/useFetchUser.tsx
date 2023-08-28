import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function useFetchUser() {
  const [user, setUser] = useState<any>();
  const supabase = createClientComponentClient();

  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    user && user.aud === "authenticated" ? setUser(user) : setUser(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
  };
}
