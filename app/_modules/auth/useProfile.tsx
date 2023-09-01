import ProfileService from "./profile.service";
import { useState, useEffect } from "react";
import { useFetchUser } from "./useFetchUser.hook";
import { ProfileType } from "./_types/profile.type";
import * as C from "./_constants/profile.constant";

export function useProfile() {
  const { user } = useFetchUser();
  const [profile, setProfile] = useState<ProfileType>();

  const createProfile = async (profileData: ProfileType) => {
    try {
      const result = await ProfileService.createProfile(profileData);

      if (!result.error) {
        setProfile(profileData);
        console.log(C.CREATE_SUCCESS);
      }

      if (result.error) {
        console.error(C.CREATE_ERROR, result.error);
      }
    } catch (error) {
      console.error(C.CREATE_ERROR, error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await ProfileService.getProfile(user.id);
      console.log(data);
      // Ajoutez ici d'autres appels pour récupérer d'autres données parallèlement
      if (data) {
        setProfile(data[0]);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const updateProfile = async (updatedData: Partial<ProfileType>) => {
    if (!profile) {
      console.error(C.UPDATE_ERROR, "aucun profil.");
      return;
    }

    try {
      const { error } = await ProfileService.updateProfile(
        profile.id,
        updatedData
      );

      if (!error) {
        console.log(C.UPDATE_SUCCESS);
        setProfile({ ...profile, ...updatedData });
      }

      if (error) {
        console.error(C.UPDATE_ERROR, error);
      }
    } catch (error) {
      console.error(C.UPDATE_ERROR, error);
      // Ajouter ici la logique de notification visuelle en cas d'erreur
    }
  };
  return {
    user,
    profile,
    createProfile,
    updateProfile,
  };
}
