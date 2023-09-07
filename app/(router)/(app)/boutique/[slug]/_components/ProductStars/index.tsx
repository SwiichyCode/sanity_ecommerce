import * as S from "./styles";
import Images from "next/image";

type Props = {
  stars: number;
};

export default function ProductStars({ stars }: Props) {
  const handleStars = (stars: number) => {
    const starsArray = [];
    for (let i = 0; i < stars; i++) {
      starsArray.push(
        <Images src="/star.svg" alt="star" width={20} height={20} />
      );
    }
    return starsArray;
  };

  return (
    <div>
      <S.ProductStarsWrapper>{handleStars(stars)}</S.ProductStarsWrapper>
    </div>
  );
}
