"use client";

import { usePathname } from "next/navigation";
import { useMenuMobileStore } from "@/app/_stores/useMenuMobileStore";
import { NavigationItems } from "./data";
import Button from "../Button";
import * as S from "./styles";

interface Props {
  isAuth?: boolean;
}

export default function Navigation({ isAuth = false }: Props) {
  const { closeMenu } = useMenuMobileStore();
  const pathname = usePathname();

  return (
    <S.NavigationWrapper>
      <S.NavigationList isAuth={isAuth}>
        {isAuth ? (
          <>
            <S.NavigationItem isAuth={isAuth}>
              <S.NavigationLink
                href={"/auth"}
                isActive={pathname === "/auth" ? true : false}
              >
                Se connecter
              </S.NavigationLink>
            </S.NavigationItem>

            <Button text={"S'inscrire"} />
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