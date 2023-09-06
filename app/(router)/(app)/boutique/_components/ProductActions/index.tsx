import React, { useState } from "react";
import Button from "@/app/_components/_atoms/Button";
import { useCartStore } from "@/app/_modules/shop/cart.store";
import { urlForImage } from "@/sanity/lib/image";
import ProductQuantity from "../ProductQuantity";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";
import { el } from "@faker-js/faker";

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
      images: urlForImage(product.images[0]) as any,
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
  return (
    <>
      <S.ProductActionsWrapper>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <Button text="Ajouter au panier" onClick={handleAddToCart} />
      </S.ProductActionsWrapper>
    </>
  );
}
