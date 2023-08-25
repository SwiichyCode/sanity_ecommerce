"use client";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { AuthCardLogoWrapper, AuthCardWrapper } from "./styles";

type Props = PropsWithChildren<{}>;

export default function AuthCard({ children }: Props) {
  return (
    <AuthCardWrapper>
      <AuthCardLogoWrapper>
        <Image src="/logo.svg" width={40} height={40} alt="logo" />
      </AuthCardLogoWrapper>
      {children}
    </AuthCardWrapper>
  );
}
