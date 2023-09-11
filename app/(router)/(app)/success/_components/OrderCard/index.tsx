import MenuCartImage from "../../../cart/_components/MenuCart/MenuCartImage";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import MenuCartInformations from "../../../cart/_components/MenuCart/MenuCartInformations";
import Button from "@/app/_components/_atoms/Button";
import { windowLocation } from "@/app/_utils/windowLocation";
import * as S from "./styles";

type Props = {
  productDetail: any;
  profile: any;
};

export default function OrderCard({ productDetail, profile }: Props) {
  return (
    <S.OrderCardWrapper>
      <S.OrderCardHeader>
        <S.OrderCardTitle>Merci pour votre commande</S.OrderCardTitle>
        <S.OrderCardSubtitle>
          Vous recevrez un email de confirmation à l&apos;adresse suivante :{" "}
          <span>{profile?.email}</span>
        </S.OrderCardSubtitle>
      </S.OrderCardHeader>
      {productDetail &&
        productDetail.map((orderProduct: any, index: number) => (
          <S.OrderProductList key={index}>
            <S.OrderProductWrapper key={index}>
              <MenuCartImage
                imageURL={urlForImage(orderProduct.images[0]).url()}
              />
              <MenuCartInformations
                product={orderProduct}
                isOrderDetail={true}
              />
            </S.OrderProductWrapper>
          </S.OrderProductList>
        ))}

      <Button onClick={() => windowLocation("/boutique")}>
        Retour à la boutique
      </Button>
    </S.OrderCardWrapper>
  );
}
