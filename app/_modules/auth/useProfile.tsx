import ProfileService from "./profile.service";
import { useState, useEffect } from "react";
import { useFetchUser } from "./useFetchUser.hook";
import { ProfileType } from "./_types/profile.type";
import * as C from "./_constants/profile.constant";
import { useProfileStore } from "./profile.store";

export function useProfile() {
  const { fetchUser } = useFetchUser();
  const { profile, setProfile } = useProfileStore();
  const [user, setUser] = useState<any>(null);

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
    const loadUserProfile = async () => {
      const user = await fetchUser();

      setUser(user);
      if (user) {
        await fetchProfile(user.id);
      }
    };

    loadUserProfile();
  }, []);

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
