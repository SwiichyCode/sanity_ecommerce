import * as S from "./styles";

type Props = {
  imageURL: string;
};

export default function MenuCartImage({ imageURL }: Props) {
  return <S.MenuCartImage imageURL={imageURL} />;
}
