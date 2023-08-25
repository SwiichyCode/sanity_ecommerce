"use client";
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../_hooks/useAuth";
import TextField from "@/app/_components/TextField";
import Button from "@/app/_components/Button";
import * as S from "./styles";
// import AuthConfirm from "../AuthConfirm";

interface Inputs {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { status, handleAuth, openConfirmation, errorMessage } = useAuth(
    isSignUp,
    setIsSignUp
  );
  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    handleAuth(data);

    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <S.FormTitle>
        {isSignUp ? "Créer un compte" : "Connectez-vous"}
      </S.FormTitle>
      <S.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField
          labeltext="Email"
          name="email"
          type="email"
          rules={{
            required: "Ce champ est requis",
          }}
        />
        <S.PasswordWrapper>
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
            rules={{
              validate: (value) => value === methods.getValues("password"),
            }}
            // errorMessage="Le mot de passe ne correspond pas"
          />
        )}
        <Button type="submit" text={isSignUp ? "Inscription" : "Connexion"} />

        {/* {openConfirmation && (
          <AuthConfirm email={methods.getValues("email")} isSignUp={isSignUp} />
        )} */}

        {/* {errorMessage && (
          <p className={clsx("text-center", "text-red-500 text-sm")}>
            {errorMessage}
          </p>
        )} */}
      </S.FormWrapper>
      <S.FormFooter>
        <S.FormFooterText>
          {isSignUp ? "Déjà inscrit ?" : "Pas encore inscrit ?"}{" "}
        </S.FormFooterText>
        <S.FormFooterLink onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Se connecter" : "S'inscrire"}
        </S.FormFooterLink>
      </S.FormFooter>
    </FormProvider>
  );
}
