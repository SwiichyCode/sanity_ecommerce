import { NavigationSocialItems } from "@/app/_components/_organisms/Navigation/data";
import * as S from "./styles";

import { ContactType } from "@/sanity/types/contact-type";

type Props = {
  contact: ContactType;
};

export default function ContactGrid({ contact }: Props) {
  const { email, phone, address, city, zip } = contact;

  return (
    <S.ContactGridWrapper>
      <S.ContactItem>
        <S.ContactIconWrapper>
          <S.ContactIcon src="/mail.svg" width={24} height={24} alt="mail" />
        </S.ContactIconWrapper>
        <S.ContactTitle>Email</S.ContactTitle>
        <S.ContactDescription>{email}</S.ContactDescription>
      </S.ContactItem>
      <S.ContactItem>
        <S.ContactIconWrapper>
          <S.ContactIcon src="/phone.svg" width={24} height={24} alt="mail" />
        </S.ContactIconWrapper>
        <S.ContactTitle>Téléphone</S.ContactTitle>
        <S.ContactDescription>{phone}</S.ContactDescription>
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
        <S.ContactDescription>{address}</S.ContactDescription>
        <S.ContactDescription>
          {city}, {zip}
        </S.ContactDescription>
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
