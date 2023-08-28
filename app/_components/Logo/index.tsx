"use client";
import Image from "next/image";
import Logo_ from "@/public/logo.svg";
import { LogoWrapper, LogoText } from "./styles";

export default function Logo() {
  return (
    <LogoWrapper>
      <Image src={Logo_} alt="Logo" />
      <LogoText>Planet Discus</LogoText>
    </LogoWrapper>
  );
}
