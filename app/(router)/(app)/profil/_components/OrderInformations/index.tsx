"use client";
import { ProfileType } from "@/app/_modules/auth/_types/profile.type";
import useOrderDetails from "../../../cart/_hooks/useOrderDetails";
import * as S from "./styles";
import FormTitle from "../UI/FormTitle";

type Props = {
  user: any;
};

export default function OrderInformations({ user }: Props) {
  const isLastOrder = false;
  const { productDetail, isLoading } = useOrderDetails(user?.id, isLastOrder);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <FormTitle title="Informations sur mes commandes" lineTop lineBottom />
      {productDetail && (
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
      )}
    </>
  );
}
