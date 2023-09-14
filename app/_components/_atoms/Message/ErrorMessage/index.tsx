import * as S from "./styles";

type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return <S.ErrorMessageWrapper>{message}</S.ErrorMessageWrapper>;
}
