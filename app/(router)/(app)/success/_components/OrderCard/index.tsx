import { useProfileStore } from "@/app/_modules/auth/profile.store";
import * as S from "./styles";

type Props = {
  order: any;
};

export default function OrderCard({ order }: Props) {
  const { profile } = useProfileStore();

  return (
    <S.OrderCardWrapper>
      <S.OrderCardHeader>
        <S.OrderCardTitle>Merci pour votre commande</S.OrderCardTitle>
        <S.OrderCardSubtitle>
          Vous recevrez un email de confirmation à l&apos;adresse suivante :{" "}
          <span>{profile?.email}</span>
        </S.OrderCardSubtitle>
      </S.OrderCardHeader>
    </S.OrderCardWrapper>
  );
}
