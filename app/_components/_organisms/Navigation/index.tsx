"use client";
import { usePathname } from "next/navigation";
import { useMenuMobileStore } from "@/app/_components/_organisms/MenuMobile/useMenuMobile";
import { NavigationItems } from "./data";
import Button from "@/app/_components/_atoms/Button";
import Link from "next/link";
import Logout from "@/app/_modules/auth/_components/Logout";
import * as S from "./styles";

interface Props {
  isAuth?: boolean;
  user?: any;
}

export default function Navigation({ isAuth = false, user }: Props) {
  const { closeMenu } = useMenuMobileStore();
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setTimeout(() => {
      closeMenu();
    }, 400);
  };

  return (
    <S.NavigationWrapper>
      <S.NavigationList isAuth={isAuth}>
        {isAuth ? (
          <>
            {user && user ? (
              <>
                <S.NavigationItem isAuth={isAuth}>
                  <S.NavigationLink href="/profil">Mon compte</S.NavigationLink>
                </S.NavigationItem>
                <Logout handleCloseMenu={handleCloseMenu} />
              </>
            ) : (
              <>
                <S.NavigationItem isAuth={isAuth} onClick={handleCloseMenu}>
                  <S.NavigationLink
                    href={"/signin"}
                    isActive={pathname === "/signin" ? true : false}
                  >
                    Connexion
                  </S.NavigationLink>
                </S.NavigationItem>

                <Button onClick={handleCloseMenu}>
                  <Link href="/signup">S&apos;inscrire</Link>
                </Button>
              </>
            )}
          </>
        ) : (
          NavigationItems.map(({ id, path, name }) => (
            <S.NavigationItem
              key={id}
              isActive={pathname === path ? true : false}
              onClick={() => {
                setTimeout(() => {
                  closeMenu();
                }, 400);
              }}
            >
              <S.NavigationLink
                href={path}
                isActive={pathname === path ? true : false}
              >
                {name}
              </S.NavigationLink>
            </S.NavigationItem>
          ))
        )}
      </S.NavigationList>
    </S.NavigationWrapper>
  );
}
