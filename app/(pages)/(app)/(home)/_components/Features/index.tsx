"use client";
import * as S from "./styles";

export default function Features() {
  return (
    <S.FeaturesWrapper>
      <S.FeaturesTitle>
        Explorez notre gamme complète de produits
      </S.FeaturesTitle>
      <S.FeaturesSubtitle>
        Explorez notre collection exquise de Discus élevés dans nos aquariums et
        choyés au quotidien, ainsi qu&apos;une variété d&apos;autres produits
        aquariophiles exceptionnels. Chez Planète Discus, nous sommes fiers de
        vous offrir des poissons d&apos;une beauté exceptionnelle et d&apos;une
        santé éclatante, tout en proposant une gamme complète
        d&apos;accessoires, d&apos;aquariums et d&apos;équipements pour
        satisfaire tous les passionnés d&apos;aquariophilie.
      </S.FeaturesSubtitle>

      <S.FeaturesList>
        <S.FeaturesItem>
          <S.FeaturesTitleWrapper>
            <S.FeaturesItemIconWrapper>
              <S.FeaturesItemIcon
                src="/heart.svg"
                width={32}
                height={32}
                alt=""
              />
            </S.FeaturesItemIconWrapper>
            <S.FeaturesItemTitle>Poissons Épanouis</S.FeaturesItemTitle>
          </S.FeaturesTitleWrapper>
          <S.FeaturesItemDescription>
            Chacun des magnifiques poissons qui composent notre collection est
            le résultat d&apos;un élevage exemplaire, soigneusement orchestré
            avec une attention minutieuse portée à chaque détail et chaque étape
            du processus.
          </S.FeaturesItemDescription>
        </S.FeaturesItem>
        <S.FeaturesItem>
          <S.FeaturesTitleWrapper>
            <S.FeaturesItemIconWrapper>
              <S.FeaturesItemIcon
                src="/nutrition.svg"
                width={32}
                height={32}
                alt=""
              />
            </S.FeaturesItemIconWrapper>
            <S.FeaturesItemTitle>Nutrition équilibrée</S.FeaturesItemTitle>
          </S.FeaturesTitleWrapper>
          <S.FeaturesItemDescription>
            Découvrez nos produits nutritifs conçus pour prévenir les carences
            et promouvoir la vitalité de vos précieux poissons. Offrez-leur le
            meilleur de la nutrition grâce à notre sélection minutieuse.
          </S.FeaturesItemDescription>
        </S.FeaturesItem>
        <S.FeaturesItem>
          <S.FeaturesTitleWrapper>
            <S.FeaturesItemIconWrapper>
              <S.FeaturesItemIcon
                src="/tools.svg"
                width={32}
                height={32}
                alt=""
              />
            </S.FeaturesItemIconWrapper>
            <S.FeaturesItemTitle>Matériel de qualité</S.FeaturesItemTitle>
          </S.FeaturesTitleWrapper>
          <S.FeaturesItemDescription>
            Faites confiance à notre gamme de matériel de haute qualité pour
            entretenir un habitat aquatique florissant. De l&apos;aquarium aux
            systèmes de filtration, nous avons tout ce dont vous avez besoin.
          </S.FeaturesItemDescription>
        </S.FeaturesItem>
        <S.FeaturesItem>
          <S.FeaturesTitleWrapper>
            <S.FeaturesItemIconWrapper>
              <S.FeaturesItemIcon
                src="/pils.svg"
                width={32}
                height={32}
                alt=""
              />
            </S.FeaturesItemIconWrapper>
            <S.FeaturesItemTitle>
              Les soins qu&apos;ils méritent
            </S.FeaturesItemTitle>
          </S.FeaturesTitleWrapper>
          <S.FeaturesItemDescription>
            Comptez sur nos traitements spécialisés et nos produits de qualité
            pour prendre soin de vos compagnons. Nous comprenons
            l&apos;importance de leur santé, c&apos;est pourquoi nos solutions
            en matière de santé sont fiables et abordables.
          </S.FeaturesItemDescription>
        </S.FeaturesItem>
      </S.FeaturesList>
    </S.FeaturesWrapper>
  );
}
