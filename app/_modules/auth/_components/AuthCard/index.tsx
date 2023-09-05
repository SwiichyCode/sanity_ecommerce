"use client";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { AuthCardLogoWrapper, AuthCardWrapper } from "./styles";

type Props = PropsWithChildren<{}>;

export default function AuthCard({ children }: Props) {
  return (
    <AuthCardWrapper>
      <AuthCardLogoWrapper>
        <Image src="/Alt_1.svg" width={82} height={82} alt="logo" />
      </AuthCardLogoWrapper>
      {children}
    </AuthCardWrapper>
  );
}
