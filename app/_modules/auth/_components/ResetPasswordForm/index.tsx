"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordDataSchema } from "@/app/_modules/auth/_schema/schema";
import { ResetPasswordAction } from "@/app/_modules/auth/_actions/reset_password_action";
import _TextField from "@/app/_components/_atoms/_TextField";
import Button from "@/app/_components/_atoms/Button";
import AuthFormMessage from "@/app/_modules/auth/_components/AuthFormMessage";

type Input = z.infer<typeof ResetPasswordDataSchema>;

export const ResetPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(ResetPasswordDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      ResetPasswordAction({
        formData: data,
      });
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-6">
        Nouveau mot de passe
      </h1>

      <div className="flex flex-col gap-6 mb-6">
        <_TextField
          labeltext="Mot de passe"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
          isPassword
        />

        <_TextField
          labeltext="Confirmer le mot de passe"
          name="confirm"
          type="password"
          register={register}
          error={errors.confirm?.message}
          isPassword
        />
      </div>

      <Button text="Confirmer" type="submit" width="full" />

      <AuthFormMessage />
    </form>
  );
};
