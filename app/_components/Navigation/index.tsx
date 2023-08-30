"use client";
import AuthServices from "@/app/(pages)/(app)/(auth)/_services/auth.service";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useMenuMobileStore } from "@/app/_stores/useMenuMobileStore";
import { useWindowSize } from "usehooks-ts";
import { NavigationItems } from "./data";
import Button from "../Button";
import Link from "next/link";
import * as S from "./styles";

interface Props {
  isAuth?: boolean;
  user?: any;
}

export default function Navigation({ isAuth = false, user }: Props) {
  const { closeMenu } = useMenuMobileStore();
  const { width } = useWindowSize();
  const pathname = usePathname();
  const router = useRouter();

  const handleCloseMenu = () => {
    setTimeout(() => {
      closeMenu();
    }, 400);
  };

  const handleLogout = async () => {
    await AuthServices.signOut();
    router.refresh();

    handleCloseMenu();
  };

  return (
    <S.NavigationWrapper>
      <S.NavigationList isAuth={isAuth}>
        {isAuth ? (
          <>
            {user && user.user ? (
              <>
                <S.NavigationItem isAuth={isAuth}>
                  <S.NavigationLink href="/profil">Mon compte</S.NavigationLink>
                </S.NavigationItem>

                {width > 1536 ? (
                  <Button text="Se déconnecter" onClick={handleLogout} />
                ) : (
                  <S.NavigationIconLogout onClick={handleLogout} />
                )}
              </>
            ) : (
              <>
                <S.NavigationItem isAuth={isAuth} onClick={handleCloseMenu}>
                  <S.NavigationLink
                    href={"/signin"}
                    isActive={pathname === "/signin" ? true : false}
                  >
                    Se connecter
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
