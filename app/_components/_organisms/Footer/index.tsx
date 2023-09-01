"use client";
import Logo from "@/app/_components/_atoms/Logo";
import NavigationFooter from "../Navigation/NavigationFooter";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterTopSide>
        <Logo />
        <NavigationFooter />
      </S.FooterTopSide>

      <S.FooterMiddleSide>
        <S.Paragraph>
          Explorez le monde aquatique avec Planète Discus, votre source de
          confiance pour vos achats en matière de poissons, de matériel et
          produits nutritifs et sanitaires en région parisienne.
        </S.Paragraph>

        <S.SocialWrapper>
          <div>
            <S.Paragraph>Visites sur rendez-vous uniquement</S.Paragraph>
            <S.Paragraph>12 Rue Franklin, 94400 Vitry-sur-Seine</S.Paragraph>
          </div>
          <NavigationFooter isSocial />
        </S.SocialWrapper>
      </S.FooterMiddleSide>

      <S.FooterBottomSide>
        <S.LegalMention>
          © 2023 Conditions de vente · Politique de confidentialité · Mentions
          légales
        </S.LegalMention>
      </S.FooterBottomSide>
    </S.FooterWrapper>
  );
}
