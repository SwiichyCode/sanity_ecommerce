import * as S from "./styles";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  imageURL: string;
};

export default function MenuCartImage({ imageURL }: Props) {
  return <S.MenuCartImage imageURL={urlForImage(imageURL[0] as any)} />;
}
