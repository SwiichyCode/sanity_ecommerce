import * as S from "./styles";
import MenuCartImage from "../../../cart/_components/MenuCart/MenuCartImage";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import MenuCartInformations from "../../../cart/_components/MenuCart/MenuCartInformations";
type Props = {
  productDetail: any;
  profile: any;
};

export default function OrderCard({ productDetail, profile }: Props) {
  console.log("productDetail", productDetail);
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
        productDetail.map((orderProducts: any, index: number) => (
          <S.OrderProductList key={index}>
            {orderProducts.map((item: any, productIndex: number) => (
              <S.OrderProductWrapper key={productIndex}>
                <MenuCartImage imageURL={urlForImage(item.images[0]).url()} />
                <MenuCartInformations product={item} isOrderDetail={true} />
              </S.OrderProductWrapper>
            ))}
          </S.OrderProductList>
        ))}
    </S.OrderCardWrapper>
  );
}
