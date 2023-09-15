import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import FormContainer from "../../container/FormContainer";
import FormItemWrapper from "../../container/FormItemWrapper";
import ButtonAction from "../../UI/ButtonAction";
import TextField from "../../UI/TextField";
import FormTitle from "../../UI/FormTitle";

import { Form } from "react-hook-form";

export default async function AccountForm() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profileData = [
    {
      label: "Email:",
      value: `${user?.email}`,
      actionLabel: "Modifier l'adresse mail",
    },
    {
      label: "Mot de passe:",
      value: "************",
      actionLabel: "Modifier le mot de passe",
    },
  ];

  return (
    <FormContainer>
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
