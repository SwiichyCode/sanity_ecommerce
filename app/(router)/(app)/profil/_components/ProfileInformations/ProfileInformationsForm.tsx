import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useProfile } from "@/app/_modules/auth/useProfile";
import { useSuccessMessageTimeout } from "../../_hooks/useSuccessMessageTimeout";
import ProfileInformationsFormItems from "./ProfileInformationsFormItem";
import {
  ProfileFormType,
  ProfileType,
} from "@/app/_modules/auth/_types/profile.type";
import { generateProfileData } from "./data";
import * as S from "./styles";

type Props = {
  profile: ProfileType;
};

type Inputs = Partial<ProfileFormType>;

export default function ProfileInformationsForm({ profile }: Props) {
  const [editableItem, setEditableItem] = useState<string | null>(null);
  const { successMessage, setSuccessMessage } =
    useSuccessMessageTimeout(setEditableItem);
  const { updateProfile } = useProfile();
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
    <S.ProfilInformations onSubmit={handleSubmit(onSubmit)}>
      {profileData.map((item, index) => (
        <ProfileInformationsFormItems
          key={index}
          item={item}
          editableItem={editableItem}
          successMessage={successMessage}
          onEdit={onEdit}
          onCancel={onCancel}
          register={register}
        />
      ))}
    </S.ProfilInformations>
  );
}
