import type { Metadata } from "next";
import AppLayout from "../_components/providers/AppProvider";
import "../_styles/index.css";
import "../_styles/globals.css";

export const metadata: Metadata = {
  title: "Planète Discus - Votre Destination Aquariophile Spécialisée",
  description:
    "Plongez dans l'univers des Discus avec Planète Discus, votre destination aquariophile spécialisée. Découvrez une vaste sélection de poissons Discus d'une beauté exceptionnelle, ainsi que des accessoires, nourriture et équipements de qualité pour créer l'aquarium parfait. Faites vivre à vos Discus une expérience aquatique optimale avec notre expertise dédiée.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
