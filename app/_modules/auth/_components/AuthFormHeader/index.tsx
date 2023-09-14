import * as S from "./styles";

type Props = {
  isSignUp: boolean;
};

export default function AuthFormHeader({ isSignUp }: Props) {
  return (
    <S.AuthFormHeaderWrapper>
      {isSignUp ? "Créer un compte" : "Connectez-vous"}
    </S.AuthFormHeaderWrapper>
  );
}
