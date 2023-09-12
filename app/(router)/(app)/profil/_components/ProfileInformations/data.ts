import { ProfileType } from "@/app/_modules/auth/_types/profile.type";

export const generateProfileData = (profile: ProfileType) => {
  return [
    {
      label: "Nom:",
      value: profile?.lastname,
      actionLabel: "Modifier le nom",
      register: "lastname",
    },
    {
      label: "Prénom:",
      value: profile?.firstname,
      actionLabel: "Modifier le prénom",
      register: "firstname",
    },
    {
      label: "Adresse:",
      value: profile?.address,
      actionLabel: "Modifier l'adresse",
      register: "address",
    },
    {
      label: "Code postal:",
      value: profile?.zipcode,
      actionLabel: "Modifier le code postal",
      register: "zipcode",
    },
    {
      label: "Ville:",
      value: profile?.city,
      actionLabel: "Modifier la ville",
      register: "city",
    },
    {
      label: "Pays:",
      value: profile?.country,
      actionLabel: "Modifier le pays",
      register: "country",
    },
    {
      label: "Téléphone:",
      value: `+33 ${profile?.phone}`,
      actionLabel: "Modifier le numéro de téléphone",
      register: "phone",
    },
  ];
};
