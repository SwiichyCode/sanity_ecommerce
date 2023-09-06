"use client";
import { usePathname } from "next/navigation";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HeaderLayout({ children, ...rest }: Props) {
  const pathname = usePathname();

  return (
    <S.HeaderWrapper pathname={pathname} {...rest}>
      {children}
    </S.HeaderWrapper>
  );
}
