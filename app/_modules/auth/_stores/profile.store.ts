import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProfileType } from "../_types/profile.type";

interface Store {
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
}

export const useProfileStore = create<Store>()(
  persist(
    (set) => ({
      profile: {
        id: "",
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        zipcode: "",
      },

      setProfile: (profile: ProfileType) => set({ profile }),
    }),

    {
      name: "profile-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
