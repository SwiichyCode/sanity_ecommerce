import { NavigationItems, NavigationSocialItems } from "../Navigation/data";
import * as S from "./styles";

type Props = {
  isSocial?: boolean;
};

export default function NavigationFooter({ isSocial = false }: Props) {
  return (
    <S.NavigationFooterWrapper>
      <S.NavigationFooterList>
        {isSocial
          ? NavigationSocialItems.map(({ id, path, icon }) => (
              <S.NavigationFooterItem key={id}>
                <S.NavigationFooterLink href={path}>
                  {icon}
                </S.NavigationFooterLink>
              </S.NavigationFooterItem>
            ))
          : NavigationItems.map(({ id, path, name }) => (
              <S.NavigationFooterItem key={id}>
                <S.NavigationFooterItem>
                  <S.NavigationFooterLink href={path}>
                    {name}
                  </S.NavigationFooterLink>
                </S.NavigationFooterItem>
              </S.NavigationFooterItem>
            ))}
      </S.NavigationFooterList>
    </S.NavigationFooterWrapper>
  );
}
