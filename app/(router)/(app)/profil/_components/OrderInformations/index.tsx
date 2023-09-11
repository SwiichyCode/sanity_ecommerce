import { ProfileType } from "@/app/_modules/auth/_types/profile.type";
import useOrderDetails from "../../../cart/_hooks/useOrderDetails";
import * as S from "./styles";

type Props = {
  profile: ProfileType;
};

export default function OrderInformations({ profile }: Props) {
  const isLastOrder = false;
  const { productDetail, isLoading } = useOrderDetails(profile.id, isLastOrder);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    productDetail && (
      <S.OrderTable>
        <S.OrderTableColumn>
          <S.OrderTableHeader>Numéro de commande</S.OrderTableHeader>
          <S.OrderTableBody>
            {productDetail.map((order: any) => (
              <S.OrderTableItem key={order.id}>{order.id}</S.OrderTableItem>
            ))}
          </S.OrderTableBody>
        </S.OrderTableColumn>
        <S.OrderTableColumn>
          <S.OrderTableHeader>Date de création</S.OrderTableHeader>
          <S.OrderTableBody>
            {productDetail.map((order: any) => (
              <S.OrderTableItem key={order.id}>
                {order.created_at}
              </S.OrderTableItem>
            ))}
          </S.OrderTableBody>
        </S.OrderTableColumn>
      </S.OrderTable>
    )
  );
}
