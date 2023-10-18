"use client";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, DeepMap, FieldError } from "react-hook-form";
import TextFieldLabel from "../TextFieldLabel";
import * as S from "./styles";

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  labeltext: string;
  name: string;
  register: any;
  error: FieldErrors["message"];
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  isPassword?: boolean;
}

export default function _TextField(props: Props) {
  const { labeltext, name, register, error, type, isPassword, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.TextFieldWrapper>
      <TextFieldLabel labeltext={labeltext} name={name} />

      <S.TextFieldContainer>
        <S.TextField
          {...register(name, { required: true })}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          {...rest}
        />

        {isPassword && (
          <S.ShowPasswordButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src={showPassword ? "./icon-hide.svg" : "./icon-show.svg"}
              width={20}
              height={20}
              alt=""
            />
          </S.ShowPasswordButton>
        )}
      </S.TextFieldContainer>
      {error && <S.TextFieldError>{error}</S.TextFieldError>}
    </S.TextFieldWrapper>
  );
}
