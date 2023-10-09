"use client";
import React, { useEffect, useState } from "react";
import FormItemWrapper from "../../container/FormItemWrapper";
import ButtonAction from "../../UI/ButtonAction";
import TextField from "../../UI/TextField";
import FormTitle from "../../UI/FormTitle";
import AuthServices from "@/app/_modules/auth/_services/auth.service";
import Message from "@/app/_components/_atoms/Message";

import { useForm } from "react-hook-form";
import { useSuccessMessageTimeout } from "../../../_hooks/useSuccessMessageTimeout";
import EditItem from "../action/EditItem";
import { AuthError } from "@supabase/supabase-js";

type Inputs = {
  email: string;
};

type Props = {
  user: any;
};

export default function AccountForm({ user }: Props) {
  const [editableItem, setEditableItem] = useState<string | null>(null);
  const { successMessage, setSuccessMessage } =
    useSuccessMessageTimeout(setEditableItem);
  const [informationMessage, setInformationMessage] = useState<string | null>(
    null
  );

  const { register, handleSubmit, setFocus, reset } = useForm<Inputs>();

  useEffect(() => {
    reset({ email: user?.email });
  }, [user]);

  const onSubmit = handleSubmit(async (data) => {
    if (!editableItem) {
      return;
    }

    try {
      const { error } = await AuthServices.updateEmail(data.email);
      setSuccessMessage("Votre email a été modifié");

      if (error) throw error;
    } catch (error) {
      const { message } = error as AuthError;
      console.log(message);
    }
  });

  const resetPassword = async () => {
    const { error } = await AuthServices.resetPassword(user?.email);
    if (!error) setInformationMessage("Un email vous a été envoyé");
  };

  const onEdit = (item: string) => {
    setEditableItem(item);
    setFocus(item as keyof Inputs);
  };

  const onCancel = () => {
    setEditableItem(null);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <FormTitle title="Informations utilisateur" lineBottom />
      <form onSubmit={onSubmit}>
        <FormItemWrapper>
          <TextField
            label="Email:"
            value={user?.email}
            register={register}
            registerValue={"email"}
            readOnly={editableItem !== "email"}
          />

          {editableItem === "email" ? (
            <EditItem successMessage={successMessage} onCancel={onCancel} />
          ) : (
            <ButtonAction
              text="Modifier l'adresse mail"
              variants="edit"
              onClick={() => onEdit("email")}
            />
          )}
        </FormItemWrapper>
      </form>

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
