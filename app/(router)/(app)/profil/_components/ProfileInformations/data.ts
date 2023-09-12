import { ProfileType } from "@/app/_modules/auth/_types/profile.type";

export const generateProfileData = (profile: ProfileType) => {
  const { firstname, lastname, address, zipcode, city, country, phone } =
    profile;

  return [
    {
      label: "Nom:",
      value: lastname,
      actionLabel: "Modifier le nom",
      register: "lastname",
    },
    {
      label: "Prénom:",
      value: firstname,
      actionLabel: "Modifier le prénom",
      register: "firstname",
    },
    {
      label: "Adresse:",
      value: address,
      actionLabel: "Modifier l'adresse",
      register: "address",
    },
    {
      label: "Code postal:",
      value: zipcode,
      actionLabel: "Modifier le code postal",
      register: "zipcode",
    },
    {
      label: "Ville:",
      value: city,
      actionLabel: "Modifier la ville",
      register: "city",
    },
    {
      label: "Pays:",
      value: country,
      actionLabel: "Modifier le pays",
      register: "country",
    },
    {
      label: "Téléphone:",
      value: `+33 ${phone}`,
      actionLabel: "Modifier le numéro de téléphone",
      register: "phone",
    },
  ];
};
