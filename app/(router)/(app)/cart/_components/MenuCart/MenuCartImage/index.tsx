import * as S from "./styles";
import { urlForImage } from "@/sanity/utils/imageBuilder";

type Props = {
  imageURL: string;
};

export default function MenuCartImage({ imageURL }: Props) {
  console.log(imageURL);
  return <S.MenuCartImage imageURL={imageURL} />;
}
