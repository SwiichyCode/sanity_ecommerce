import React, { useState } from "react";
import Button from "@/app/_components/_atoms/Button";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import ProductQuantity from "../ProductQuantity";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import { v4 as uuidv4 } from "uuid";
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
  const { addToCart, addFishToCart } = useCartStore();

  const handleAddToCart = () => {
    if (product.category.category === "poisson" && !sizes.size) {
      setErrorSize("Veuillez sélectionner une taille");
      return;
    }

    const item = {
      name: product.name,
      description: product.description,
      id: product.id,
      productId: uuidv4(),
      cost: sizes.price ? sizes.price : product.price,
      images: urlForImage(product.images[0]).url() as any,
      sizes: sizes.size,
      category: product.category.category,
    };

    if (product.category.category === "poisson") {
      addFishToCart(item, quantity);
    } else {
      addToCart(item, quantity);
    }
    setErrorSize(null);
  };

  const handleReturnToShop = () => {
    window.history.back();
  };

  const handleCheckout = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <S.ProductActionsWrapper>
        <S.CartAction>
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
          <Button text="Ajouter au panier" onClick={handleAddToCart} />
          {/* <S.LocationAction onClick={handleCheckout}>
            Passer la commande
          </S.LocationAction> */}
        </S.CartAction>
        <S.LocationAction>
          <Button text="Passer la commande" onClick={handleCheckout} />
          <S.SpanLink onClick={handleReturnToShop}>
            Retour à la boutique
          </S.SpanLink>
        </S.LocationAction>
      </S.ProductActionsWrapper>
    </>
  );
}
