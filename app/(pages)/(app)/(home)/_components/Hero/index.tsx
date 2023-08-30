"use client";
import Button from "@/app/_components/Button";
import * as S from "./styles";

export default function Hero() {
  return (
    <S.HeroWrapper className="responsive-padding">
      <S.HeroContainer>
        <S.HeroTitle>
          Bienvenue sur <br />
          <span>Planète Discus</span>
        </S.HeroTitle>
        <S.HeroSubtitle>Votre source aquariophile de confiance</S.HeroSubtitle>
        <S.HeroDescription>
          Découvrez l&apos;univers fascinant de Planète Discus, le chef de file
          incontesté du marché aquariophile en région parisienne. Depuis des
          années, nous sommes votre partenaire privilégié pour tous vos besoins
          en aquariophilie.
        </S.HeroDescription>

        <S.HeroCTA>
          <p>
            Plongez dans le monde coloré des Discus – Parcourez nos collections
            maintenant.
          </p>

          <Button text="Découvrir" />
        </S.HeroCTA>
      </S.HeroContainer>
    </S.HeroWrapper>
  );
}
