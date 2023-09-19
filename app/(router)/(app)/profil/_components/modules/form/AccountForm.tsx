"use client";
import React, { useState } from "react";
import FormItemWrapper from "../../container/FormItemWrapper";
import ButtonAction from "../../UI/ButtonAction";
import TextField from "../../UI/TextField";
import FormTitle from "../../UI/FormTitle";
import AuthServices from "@/app/_modules/auth/_services/auth.service";
import Message from "@/app/_components/_atoms/Message";

type Props = {
  user: any;
};

export default function AccountForm({ user }: Props) {
  const [informationMessage, setInformationMessage] = useState<string | null>(
    null
  );

  const resetPassword = async () => {
    const { error } = await AuthServices.resetPassword(user?.email);

    if (!error) setInformationMessage("Un email vous a été envoyé");
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <FormTitle title="Informations utilisateur" lineBottom />

      <FormItemWrapper>
        <TextField label="Email:" value={user?.email} readOnly={true} />
        <ButtonAction text="Modifier l'adresse mail" variants="edit" />
      </FormItemWrapper>

      <FormItemWrapper>
        <TextField label="Mot de passe:" value="************" readOnly={true} />

        {informationMessage ? (
          <Message message={informationMessage} />
        ) : (
          <ButtonAction
            text="Modifier le mot de passe"
            variants="edit"
            onClick={resetPassword}
          />
        )}
      </FormItemWrapper>
    </div>
  );
}
