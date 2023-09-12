import { useUser } from "@/app/_modules/auth/_hooks/useUser";
import * as S from "../ProfileInformations/styles";

export default function AccountInformations() {
  const { user } = useUser();

  const profileData = [
    {
      label: "Email:",
      value: `${user?.email}`,
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
      {user &&
        profileData.map((item, index) => (
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
