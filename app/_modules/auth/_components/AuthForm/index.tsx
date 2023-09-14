"use client";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signinAction } from "../../_actions/signin_action";
import { FormDataSchema } from "../../_schema/schema";
import AuthFormHeader from "../AuthFormHeader";
import AuthFormFooter from "../AuthFormFooter";
import AuthFormMessage from "../AuthFormMessage";
import TextField from "@/app/_components/_atoms/TextField";
import _TextField from "@/app/_components/_atoms/_TextField";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";

type Inputs = z.infer<typeof FormDataSchema>;

type Props = {
  isSignUp: boolean;
  isCheckout?: boolean;
  setIsSignUp?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthForm({ isSignUp, isCheckout, setIsSignUp }: Props) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      signinAction("http://localhost:3000", data);
    });
  });

  return (
    <>
      <AuthFormHeader isSignUp={isSignUp} />
      <S.FormWrapper onSubmit={onSubmit}>
        <_TextField
          labeltext="Email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <_TextField
          labeltext="Mot de passe"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
        />

        {/* <S.PasswordWrapper>
          <TextField
            labeltext="Mot de passe"
            name="password"
            type="password"
            rules={{
              minLength: isSignUp ? 8 : undefined,
            }}
          />
          {!isSignUp && (
            <S.ForgotPassword href="/">Mot de passe oublié?</S.ForgotPassword>
          )}
        </S.PasswordWrapper>
        {isSignUp && (
          <TextField
            labeltext="Confirmer le mot de passe"
            name="confirmPassword"
            type="password"
            // rules={{
            //   validate: (value) => value === methods.getValues("password"),
            // }}
            // errorMessage="Le mot de passe ne correspond pas"
          />
        )} */}
        <Button
          type="submit"
          text={
            isPending ? "Chargement..." : isSignUp ? "Inscription" : "Connexion"
          }
        />

        <AuthFormMessage />
      </S.FormWrapper>
      <AuthFormFooter
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        isCheckout={isCheckout}
      />
    </>
  );
}
