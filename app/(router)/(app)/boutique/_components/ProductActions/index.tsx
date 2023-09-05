import React, { useState } from "react";
import Button from "@/app/_components/_atoms/Button";
import { useCartStore } from "@/app/_modules/shop/cart.store";
import { urlForImage } from "@/sanity/lib/image";
import ProductQuantity from "../ProductQuantity";
import * as S from "./styles";

type Props = {
  sizes: any;
  setErrorSize: (error: string | null) => void;
  product: any;
};

export default function ProductActions({
  sizes,

  setErrorSize,
  product,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (product.category.category === "poisson" && !sizes.size) {
      setErrorSize("Veuillez sélectionner une taille");
      return;
    }

    addToCart(
      {
        name: product.name,
        description: product.description,
        id: product.id,
        cost: sizes.price ? sizes.price : product.price,
        images: urlForImage(product.images[0]) as any,
      },
      quantity
    );

    setErrorSize(null);
  };
  return (
    <>
      <S.ProductActionsWrapper>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <Button text="Ajouter au panier" onClick={handleAddToCart} />
      </S.ProductActionsWrapper>
    </>
  );
}
