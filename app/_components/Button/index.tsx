import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button(props: Props) {
  const { text, ...rest } = props;

  return <S.Button {...rest}>{text}</S.Button>;
}
