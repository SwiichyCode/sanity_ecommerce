import Link from "next/link";
import * as S from "./styles";

type Props = {
  isSignUp: boolean;
  isCheckout?: boolean;
  setIsSignUp?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthFormFooter({
  isSignUp,
  isCheckout,
  setIsSignUp,
}: Props) {
  return (
    <S.AuthFormFooterWrapper>
      <S.FormFooterText>
        {isSignUp ? "Déjà inscrit ?" : "Pas encore inscrit ?"}
      </S.FormFooterText>

      {isCheckout && setIsSignUp ? (
        <S.FormFooterLink onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Se connecter" : "S'inscrire"}
        </S.FormFooterLink>
      ) : (
        <S.FormFooterLink>
          <Link href={isSignUp ? "/signin" : "/signup"}>
            {isSignUp ? "Se connecter" : "S'inscrire"}
          </Link>
        </S.FormFooterLink>
      )}
    </S.AuthFormFooterWrapper>
  );
}
