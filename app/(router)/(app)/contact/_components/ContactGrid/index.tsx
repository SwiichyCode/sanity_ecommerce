import { NavigationSocialItems } from "@/app/_components/_organisms/Navigation/data";
import * as S from "./styles";

export default function ContactGrid() {
  return (
    <S.ContactGridWrapper>
      <S.ContactItem>
        <S.ContactIconWrapper>
          <S.ContactIcon src="/mail.svg" width={24} height={24} alt="mail" />
        </S.ContactIconWrapper>
        <S.ContactTitle>Email</S.ContactTitle>
        <S.ContactDescription>contact@flex.co</S.ContactDescription>
      </S.ContactItem>
      <S.ContactItem>
        <S.ContactIconWrapper>
          <S.ContactIcon src="/phone.svg" width={24} height={24} alt="mail" />
        </S.ContactIconWrapper>
        <S.ContactTitle>Téléphone</S.ContactTitle>
        <S.ContactDescription>+7-843-672-431</S.ContactDescription>
      </S.ContactItem>
      <S.ContactItem>
        <S.ContactIconWrapper>
          <S.ContactIcon
            src="/location.svg"
            width={24}
            height={24}
            alt="mail"
          />
        </S.ContactIconWrapper>
        <S.ContactTitle>Boutique</S.ContactTitle>
        <S.ContactDescription>1686, Geraldine Lane</S.ContactDescription>
        <S.ContactDescription>New York, NY 10013</S.ContactDescription>
      </S.ContactItem>
      <S.ContactItem>
        <S.ContactIconWrapper>
          <S.ContactIcon src="/social.svg" width={24} height={24} alt="mail" />
        </S.ContactIconWrapper>
        <S.ContactTitle>Réseaux</S.ContactTitle>
        <S.ContactSocialList>
          {NavigationSocialItems.map(({ id, path, icon }) => (
            <S.ContactSocialLink href={path} key={id}>
              {icon}
            </S.ContactSocialLink>
          ))}
        </S.ContactSocialList>
      </S.ContactItem>
    </S.ContactGridWrapper>
  );
}
