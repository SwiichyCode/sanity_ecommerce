import { ProfileType } from "@/app/_modules/auth/_types/profile.type";
import * as S from "../ProfileInformations/styles";

type Props = {
  profile: ProfileType;
};

export default function AccountInformations({ profile }: Props) {
  const { email, phone } = profile;

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
    {
      label: "Téléphone:",
      value: `+33 ${phone}`,
      actionLabel: "Modifier le numéro de téléphone",
    },
  ];

  return (
    <S.ProfilInformations>
      {profileData.map((item, index) => (
        <S.ProfilItem key={index}>
          <S.ProfilItemWrapper>
            <S.ProfilItemLabel>{item.label}</S.ProfilItemLabel>
            <S.ProfilItemValue>{item.value}</S.ProfilItemValue>
          </S.ProfilItemWrapper>
          <S.ProfilItemAction>{item.actionLabel}</S.ProfilItemAction>
        </S.ProfilItem>
      ))}
    </S.ProfilInformations>
  );
}
