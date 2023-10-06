import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const NavigationItems = [
  {
    id: 1,
    name: "Accueil",
    path: URL_CONSTANT.HOME,
  },
  {
    id: 2,
    name: "Boutique",
    path: URL_CONSTANT.BOUTIQUE,
  },
  {
    id: 4,
    name: "Contact",
    path: URL_CONSTANT.CONTACT,
  },
];

export const NavigationAuthItems = [
  {
    id: 1,
    name: "Se connecter",
    path: "/auth",
  },
  {
    id: 2,
    name: "S'inscrire",
    path: "/auth",
  },
];

export const NavigationSocialItems = [
  {
    id: 1,
    icon: <BsFacebook size={24} />,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <BsInstagram size={24} />,
    path: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <BsTwitter size={24} />,
    path: "https://www.twitter.com",
  },
];
