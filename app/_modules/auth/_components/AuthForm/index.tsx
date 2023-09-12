"use client";
import Link from "next/link";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useAuth } from "@/app/_modules/auth/_hooks/useAuth";
import TextField from "@/app/_components/_atoms/TextField";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";

interface Inputs {
  email: string;
  password: string;
  confirmPassword?: string;
}

type Props = {
  isSignUp: boolean;
  isCheckout?: boolean;
  setIsSignUp?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthForm({ isSignUp, isCheckout, setIsSignUp }: Props) {
  const { handleAuth } = useAuth(isSignUp, isCheckout);
  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    handleAuth(data);
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
          {isSignUp ? "Déjà inscrit ?" : "Pas encore inscrit ?"}
        </S.FormFooterText>

        {isCheckout && setIsSignUp ? (
          <S.FormFooterLink onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Se connecter" : "S'inscrire"}
          </S.FormFooterLink>
        ) : (
          <S.FormFooterLink>
            <Link href={isSignUp ? "/signin" : "/signup"}>
              {isSignUp ? "Se connecter" : "S'inscrire"}
            </Link>
          </S.FormFooterLink>
        )}
      </S.FormFooter>
    </FormProvider>
  );
}
