import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    setUser(user);
  }, []);

  return { user };
}
