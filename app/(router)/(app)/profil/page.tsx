"use client";
import { useProfileStore } from "@/app/_modules/auth/profile.store";
import ProfileHeader from "./_components/ProfileHeader";
import AccountInformations from "./_components/AccountInformations";
import ProfileInformationsForm from "./_components/ProfileInformations/ProfileInformationsForm";
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
      <ProfileInformationsForm profile={profile} />
      <S.Line />
      <ProfileHeader title="Mes commandes" />
      <S.Line />
      <OrderInformations profile={profile} />
    </S.ProfilWrapper>
  );
}
