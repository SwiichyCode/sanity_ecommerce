"use client";

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
  const { labeltext, name, register, error, isPassword, ...rest } = props;

  return (
    <S.TextFieldWrapper>
      <TextFieldLabel labeltext={labeltext} name={name} />
      <S.TextField {...register(name, { required: true })} {...rest} />
      {error && <S.TextFieldError>{error}</S.TextFieldError>}
    </S.TextFieldWrapper>
  );
}
