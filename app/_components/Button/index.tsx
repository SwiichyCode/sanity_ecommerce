import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button(props: Props) {
  const { text, children, ...rest } = props;

  return (
    <S.Button {...rest}>
      {text} {children}
    </S.Button>
  );
}
