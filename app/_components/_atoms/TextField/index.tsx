import { useFormContext, RegisterOptions, FieldValues } from "react-hook-form";
import TextFieldLabel from "../TextFieldLabel";
import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  labeltext: string;
  name: string;
  rules?: Pick<
    RegisterOptions<FieldValues>,
    "maxLength" | "minLength" | "validate" | "required" | "pattern"
  >;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
}

export default function TextField(props: Props) {
  const { labeltext, name, rules, ...rest } = props;
  const { register, formState } = useFormContext();

  return (
    <S.TextFieldWrapper>
      <TextFieldLabel labeltext={labeltext} name={name} />
      <S.TextField {...register?.(name, rules)} {...rest} />
      {/* {methods.errors.email && (
          <S.TextFieldError>
              {methods.errors.email.message}
          </S.TextFieldError>
      )} */}
    </S.TextFieldWrapper>
  );
}
