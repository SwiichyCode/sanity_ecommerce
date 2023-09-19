import * as S from "./styles";

type Props = {
  imageURL: string;
};

export default function ProductPreviewImage({ imageURL }: Props) {
  return <S.ProductPreviewImageWrapper imageURL={imageURL} />;
}
