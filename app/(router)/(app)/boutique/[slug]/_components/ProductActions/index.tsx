import Button from "@/app/_components/_atoms/Button";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import ProductQuantity from "../ProductQuantity";
import { urlForImage } from "@/sanity/utils/imageBuilder";
import { v4 as uuidv4 } from "uuid";
import type { ProductType } from "@/sanity/types/product-type";
import * as S from "./styles";

type Props = {
  quantity: number;
  setQuantity: (quantity: number) => void;
  productPrice: number;
  productSize: number;
  setErrorSize: (error: string | null) => void;
  product: ProductType;
};

export default function ProductActions({
  quantity = 1,
  setQuantity,
  productPrice,
  productSize,
  setErrorSize,
  product,
}: Props) {
  const { addToCart, addFishToCart } = useCartStore();
  const { id, name, description, images, variants, category } = product;

  const handleAddToCart = () => {
    if (product.category === "poisson" && !productSize) {
      setErrorSize("Veuillez sélectionner une taille");
      return;
    }

    const item = {
      id: id,
      productId: uuidv4(),
      name: name,
      description: description,
      price: productPrice,
      images: urlForImage(images[0]).url() as any,
      sizes: productSize,
      sizesUnit: variants[0].sizeUnit,
      weight: 500,
      category: category,
    };

    if (product.category === "poisson") {
      addFishToCart(item, quantity);
    } else {
      addToCart(item, quantity);
    }
    setErrorSize(null);
  };

  // if (product.stock <= 0) return null;

  return (
    <>
      <S.ProductActionsWrapper>
        <S.CartAction>
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
          <Button text="Ajouter au panier" onClick={handleAddToCart} />
        </S.CartAction>
      </S.ProductActionsWrapper>
    </>
  );
}
