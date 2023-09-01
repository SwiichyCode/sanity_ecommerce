import * as S from "./styles";

type Props = {
  labeltext: string;
  name: string;
};

export default function TextFieldLabel({ name, labeltext }: Props) {
  return (
    <S.TextFieldLabelWrapper htmlFor={name}>
      {labeltext}
    </S.TextFieldLabelWrapper>
  );
}
