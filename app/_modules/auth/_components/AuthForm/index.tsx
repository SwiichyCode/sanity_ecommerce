"use client";
import { z } from "zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authAction } from "../../_actions/auth_action";
import { FormDataSchema, SigninDataSchema } from "../../_schema/schema";
import AuthFormHeader from "../AuthFormHeader";
import AuthFormFooter from "../AuthFormFooter";
import AuthFormMessage from "../AuthFormMessage";
import _TextField from "@/app/_components/_atoms/_TextField";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";
import { FormFooterLink } from "../AuthFormFooter/styles";

type Input = z.infer<typeof FormDataSchema>;

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
  } = useForm<Input>({
    resolver: zodResolver(isSignUp ? FormDataSchema : SigninDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      authAction({
        formData: data,
        isSignUp,
        isCheckout,
      });
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
        <div className="flex flex-col gap-3">
          <_TextField
            labeltext="Mot de passe"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
            isPassword
          />
          {!isSignUp && (
            <FormFooterLink>
              <Link href="/recovery">Mot de passe oublié ?</Link>
            </FormFooterLink>
          )}
        </div>

        {isSignUp && (
          <_TextField
            labeltext="Confirmer le mot de passe"
            name="confirm"
            type="password"
            register={register}
            error={errors.confirm?.message}
            isPassword
          />
        )}

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
