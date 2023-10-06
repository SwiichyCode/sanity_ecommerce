"use client";
import Link from "next/link";
import Logout from "@/app/_modules/auth/_components/Logout";
import { usePathname } from "next/navigation";
import { useMenuMobileStore } from "@/app/_components/_organisms/MenuMobile/useMenuMobile";
import { NavigationItems } from "./data";
import Button from "@/app/_components/_atoms/Button";
import { URL_CONSTANT } from "@/app/_constants/url.constant";
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
                  <S.NavigationLink href={URL_CONSTANT.PROFIL}>
                    Mon compte
                  </S.NavigationLink>
                </S.NavigationItem>
                <Logout handleCloseMenu={handleCloseMenu} />
              </>
            ) : (
              <>
                <S.NavigationItem isAuth={isAuth} onClick={handleCloseMenu}>
                  <S.NavigationLink
                    href={URL_CONSTANT.SIGNIN}
                    isActive={pathname === URL_CONSTANT.SIGNIN ? true : false}
                  >
                    Connexion
                  </S.NavigationLink>
                </S.NavigationItem>

                <Button onClick={handleCloseMenu}>
                  <Link href={URL_CONSTANT.SIGNUP}>S&apos;inscrire</Link>
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
