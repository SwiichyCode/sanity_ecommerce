"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useProfile } from "@/app/_modules/auth/_hooks/useProfile";
import { useSuccessMessageTimeout } from "../../../_hooks/useSuccessMessageTimeout";
import ProfileFormItem from "../view/ProfileFormItem";
import {
  ProfileFormType,
  ProfileType,
} from "@/app/_modules/auth/_types/profile.type";
import { generateProfileData } from "../../data/profileData";
import ProfileFormWrapper from "../../container/FormContainer";
import FormTitle from "../../UI/FormTitle";

type Inputs = Partial<ProfileFormType>;

export default function ProfileForm() {
  const [editableItem, setEditableItem] = useState<string | null>(null);
  const { successMessage, setSuccessMessage } =
    useSuccessMessageTimeout(setEditableItem);
  const { profile, updateProfile } = useProfile();
  const { register, handleSubmit, reset, setFocus } = useForm<Inputs>();

  const profileData = generateProfileData(profile);

  useEffect(() => {
    reset(profile);
  }, [profile]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!editableItem) {
      return;
    }

    try {
      await updateProfile(data as ProfileType);
      setSuccessMessage("Modification effectuée avec succès !");
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = (item: string) => {
    setEditableItem(item);
    setFocus(item as keyof Inputs);
  };

  const onCancel = () => {
    setEditableItem(null);
    reset(profile);
  };

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title="Informations de livraison" lineTop lineBottom />
      {profileData.map((item, index) => (
        <ProfileFormItem
          key={index}
          item={item}
          editableItem={editableItem}
          successMessage={successMessage}
          onEdit={onEdit}
          onCancel={onCancel}
          register={register}
        />
      ))}
    </ProfileFormWrapper>
  );
}
