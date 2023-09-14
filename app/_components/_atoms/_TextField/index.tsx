import TextFieldLabel from "../TextFieldLabel";
import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  labeltext: string;
  name: string;
  register: any;
  error: string | undefined;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
}

export default function _TextField(props: Props) {
  const { labeltext, name, register, error, ...rest } = props;

  return (
    <S.TextFieldWrapper>
      <TextFieldLabel labeltext={labeltext} name={name} />
      <S.TextField {...register(name, { required: true })} {...rest} />
      {error && <S.TextFieldError>{error}</S.TextFieldError>}
    </S.TextFieldWrapper>
  );
}
