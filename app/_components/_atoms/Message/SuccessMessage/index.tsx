import * as S from "./styles";

type Props = {
  message: string;
};

export default function SuccessMessage({ message }: Props) {
  return <S.SuccessMessageWrapper>{message}</S.SuccessMessageWrapper>;
}
