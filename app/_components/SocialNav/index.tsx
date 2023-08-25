import NavigationFooter from "../NavigationFooter";
import * as S from "./styles";

export default function SocialNav() {
  return (
    <S.SocialWrapper>
      <div>
        <S.Paragraph>Visites sur rendez-vous uniquement</S.Paragraph>
        <S.Paragraph>12 Rue Franklin, 94400 Vitry-sur-Seine</S.Paragraph>
      </div>
      <NavigationFooter />
    </S.SocialWrapper>
  );
}
