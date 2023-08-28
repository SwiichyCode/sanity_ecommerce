"use client";
import { usePathname } from "next/navigation";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function HeaderLayout({ children }: Props) {
  const pathname = usePathname();

  return <S.HeaderWrapper pathname={pathname}>{children}</S.HeaderWrapper>;
}
