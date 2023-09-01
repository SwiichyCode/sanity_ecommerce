import * as S from "./styles";

type Props = {
  isSocial?: boolean;
};

export default function NavigationSocial({ isSocial }: Props) {
  return (
    <S.NavigationSocialWrapper>
      <h1>NavigationSocial</h1>
    </S.NavigationSocialWrapper>
  );
}
