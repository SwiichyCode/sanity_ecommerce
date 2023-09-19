"use client";
import AuthServices from "@/app/_modules/auth/_services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthError } from "@supabase/supabase-js";
import { ResetPasswordDataSchema } from "@/app/_modules/auth/_schema/schema";
import _TextField from "@/app/_components/_atoms/_TextField";
import Button from "@/app/_components/_atoms/Button";
import Message from "@/app/_components/_atoms/Message";

type Input = z.infer<typeof ResetPasswordDataSchema>;

export default function ResetPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(ResetPasswordDataSchema),
  });
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();
  const [hash, setHash] = useState("");
  const router = useRouter();

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { password } = data;
      const { error } = await AuthServices.updatePassword(password);

      if (error) throw error;

      setSuccessMessage("Votre mot de passe a été modifié avec succès");

      setTimeout(() => {
        router.push("/profil");
      }, 3000);
    } catch (error) {
      const { message } = error as AuthError;
      setErrorMessage(message);
    }
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
        />

        <_TextField
          labeltext="Confirmer le mot de passe"
          name="confirm"
          type="password"
          register={register}
          error={errors.confirm?.message}
        />

        {errorMessage && <Message message={errorMessage} type="error" />}
        {successMessage && <Message message={successMessage} type="success" />}
      </div>

      <Button text="Confirmer" type="submit" width="full" />
    </form>
  );
}
