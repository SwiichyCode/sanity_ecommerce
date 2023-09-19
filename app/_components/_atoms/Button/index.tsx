import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  width?: "full" | "auto";
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Button(props: Props) {
  const { text, width, children, className, ...rest } = props;

  return (
    <S.Button {...rest} width={width} className={className}>
      {text} {children}
    </S.Button>
  );
}
