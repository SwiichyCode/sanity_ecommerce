"use client";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import CheckoutDetailForm from "../CheckoutDetailsForm";
import Summary from "../Summary";
import { useEffect } from "react";
import { useProfile } from "../../../profil/_hooks/useProfile";
import {
  ProfileType,
  ProfileFormType,
} from "../../../profil/_types/profile.type";
import * as S from "./styles";

type Inputs = Partial<ProfileType>;

type Props = {
  user?: any;
};

export default function CheckoutDetails({ user }: Props) {
  const { user: User, profile, createProfile, updateProfile } = useProfile();
  const methods = useForm<Inputs>();
  const { reset } = methods;

  useEffect(() => {
    reset(profile);
  }, [profile]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    if (!profile?.lastname) {
      createProfile({
        id: User?.id,
        ...(data as ProfileFormType),
      });
    } else {
      updateProfile(data as ProfileType);
    }
  };

  return (
    <FormProvider {...methods}>
      <S.CheckoutDetailsFormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <CheckoutDetailForm user={User} profile={profile} />

        <Summary user={user} />
      </S.CheckoutDetailsFormWrapper>
    </FormProvider>
  );
}
