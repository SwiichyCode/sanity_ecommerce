"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderLayout from "./HeaderLayout";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Vérifiez d'abord si les informations de l'utilisateur existent dans le localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Effectuez une requête pour obtenir les informations de l'utilisateur
      // si elles n'existent pas dans le localStorage
      // ...
      // Une fois les informations de l'utilisateur obtenues, mettez-les à jour dans le localStorage
      // localStorage.setItem("user", JSON.stringify(newUser));
    }
  }, [pathname]);

  return (
    <HeaderLayout className="responsive-padding">
      <HeaderMobile user={user} />
      <HeaderDesktop user={user} />
    </HeaderLayout>
  );
}
