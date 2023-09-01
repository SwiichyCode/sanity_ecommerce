import { useFormContext, RegisterOptions, FieldValues } from "react-hook-form";
import TextFieldLabel from "../TextFieldLabel";
import * as S from "./styles";

interface Props {
  labeltext: string;
  name: string;
  rules?: Pick<
    RegisterOptions<FieldValues>,
    "maxLength" | "minLength" | "validate" | "required" | "pattern"
  >;
}

export default function TextArea(props: Props) {
  const { labeltext, name, rules, ...rest } = props;
  const { register, formState } = useFormContext();

  return (
    <S.Container>
      <TextFieldLabel labeltext={labeltext} name={name} />
      <S.TextAreaWrapper {...register?.(name, rules)} {...rest} />
    </S.Container>
  );
}
