import * as S from "./styles";

type Props = {
  title: string;
};

export default function ProfileHeader({ title }: Props) {
  return (
    <S.ProfilHeader>
      <S.ProfilTitle>{title}</S.ProfilTitle>
    </S.ProfilHeader>
  );
}
