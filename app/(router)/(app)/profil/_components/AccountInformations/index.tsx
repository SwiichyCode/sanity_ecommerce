import { ProfileType } from "@/app/_modules/auth/_types/profile.type";
import * as S from "../ProfileInformations/styles";

type Props = {
  profile: ProfileType;
};

export default function AccountInformations({ profile }: Props) {
  const { email } = profile;

  const profileData = [
    {
      label: "Email:",
      value: `${email}`,
      actionLabel: "Modifier l'adresse mail",
    },
    {
      label: "Mot de passe:",
      value: "************",
      actionLabel: "Modifier le mot de passe",
    },
  ];

  return (
    <S.ProfilInformations>
      {profileData.map((item, index) => (
        <S.ProfilItem key={index}>
          <S.ProfilItemWrapper>
            <S.ProfilItemLabel>{item.label}</S.ProfilItemLabel>
            <S.ProfilItemValue
              defaultValue={item.value}
              size={item.value.length + 8}
              readOnly
            />
          </S.ProfilItemWrapper>
          <S.ProfilItemAction>{item.actionLabel}</S.ProfilItemAction>
        </S.ProfilItem>
      ))}
    </S.ProfilInformations>
  );
}
