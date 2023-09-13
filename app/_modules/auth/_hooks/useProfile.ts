import ProfileService from "../_services/profile.service";
import { useEffect } from "react";
import { ProfileType } from "../_types/profile.type";
import { useProfileStore } from "../_stores/profile.store";
import { useUser } from "./useUser";
import * as C from "../_constants/profile.constant";

export function useProfile() {
  const { user } = useUser();
  const { profile, setProfile } = useProfileStore();

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

  const fetchProfile = async (userId: string) => {
    try {
      const { data } = await ProfileService.getProfile(userId);
      // Ajoutez ici la logique pour traiter les données du profil
      if (data) {
        setProfile(data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchProfile(user?.id);
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
    profile,
    createProfile,
    updateProfile,
  };
}
