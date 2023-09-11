import { ProfileType } from "@/app/_modules/auth/_types/profile.type";
import * as S from "./styles";

type Props = {
  profile: ProfileType;
};

export default function ProfileInformations({ profile }: Props) {
  const { firstname, lastname, address, zipcode, city, country } = profile;

  const profileData = [
    {
      label: "Nom:",
      value: `${firstname} ${lastname}`,
      actionLabel: "Modifier le nom",
    },
    { label: "Adresse:", value: address, actionLabel: "Modifier l'adresse" },
    {
      label: "Code postal:",
      value: zipcode,
      actionLabel: "Modifier le code postal",
    },
    { label: "Ville:", value: city, actionLabel: "Modifier la ville" },
    { label: "Pays:", value: country, actionLabel: "Modifier le pays" },
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
