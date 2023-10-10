"use client";
import { z } from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RecoveryAction } from "@/app/_modules/auth/_actions/recovery_action";
import { RecoveryDataSchema } from "@/app/_modules/auth/_schema/schema";
import { FormWrapper } from "@/app/_modules/auth/_components/AuthForm/styles";
import { AuthFormHeaderWrapper } from "@/app/_modules/auth/_components/AuthFormHeader/styles";
import _TextField from "@/app/_components/_atoms/_TextField";
import Button from "@/app/_components/_atoms/Button";
import AuthFormMessage from "@/app/_modules/auth/_components/AuthFormMessage";

type Input = z.infer<typeof RecoveryDataSchema>;

export default function RecoveryForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(RecoveryDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      RecoveryAction({
        formData: data,
      });
    });
  });

  return (
    <>
      <AuthFormHeaderWrapper>
        Mot de passe oublié{" "}
        <p className=" text-sm">
          Veuillez entrer votre adresse email. Vous recevrez un lien pour créer
          un nouveau mot de passe par email.
        </p>
      </AuthFormHeaderWrapper>

      <FormWrapper onSubmit={onSubmit}>
        <_TextField
          labeltext="Email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Button type="submit" text="Envoyer" disabled={isPending} />

        <AuthFormMessage />
      </FormWrapper>
    </>
  );
}
