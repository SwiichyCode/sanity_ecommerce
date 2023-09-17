"use client";
import FormContainer from "../../container/FormContainer";
import FormItemWrapper from "../../container/FormItemWrapper";
import ButtonAction from "../../UI/ButtonAction";
import TextField from "../../UI/TextField";
import FormTitle from "../../UI/FormTitle";

import AuthServices from "@/app/_modules/auth/_services/auth.service";

type Props = {
  user: any;
};

export default function AccountForm({ user }: Props) {
  const profileData = [
    {
      label: "Email:",
      value: `${user?.email}`,
      actionLabel: "Modifier l'adresse mail",
      action: "",
    },
    {
      label: "Mot de passe:",
      value: "************",
      actionLabel: "Modifier le mot de passe",
    },
  ];

  const resetPassword = async (e: any) => {
    e.preventDefault();
    const { error } = await AuthServices.resetPassword(user?.email);

    console.log(error);
  };

  return (
    <FormContainer onSubmit={(e: any) => resetPassword(e)}>
      <FormTitle title="Informations utilisateur" lineBottom />
      {profileData.map((item, index) => (
        <FormItemWrapper key={index}>
          <TextField label={item.label} value={item.value} />
          <ButtonAction text={item.actionLabel} variants="edit" />
        </FormItemWrapper>
      ))}
    </FormContainer>
  );
}
