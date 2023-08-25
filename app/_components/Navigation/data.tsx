import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const NavigationItems = [
  {
    id: 1,
    name: "Accueil",
    path: "/",
  },
  {
    id: 2,
    name: "Boutique",
    path: "/boutique",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
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
