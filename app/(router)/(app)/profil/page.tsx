"use client";
import { useProfileStore } from "@/app/_modules/auth/profile.store";
import ProfileHeader from "./_components/ProfileHeader";
import AccountInformations from "./_components/AccountInformations";
import ProfileInformations from "./_components/ProfileInformations";
import OrderInformations from "./_components/OrderInformations";
import * as S from "./styles";

export default function ProfilPage() {
  const { profile } = useProfileStore();

  return (
    <S.ProfilWrapper>
      <ProfileHeader title="Mon profil" />
      <S.Line />
      <AccountInformations profile={profile} />
      <S.Line />
      <ProfileHeader title="Informations de livraison" />
      <S.Line />
      <ProfileInformations profile={profile} />
      <S.Line />
      <ProfileHeader title="Mes commandes" />
      <S.Line />
      <OrderInformations profile={profile} />
    </S.ProfilWrapper>
  );
}
