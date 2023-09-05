"use client";
import Image from "next/image";
import Logo_ from "@/public/logo.svg";
import Logo__ from "@/public/Alt_1.svg";
import { LogoWrapper, LogoText } from "./styles";

export default function Logo() {
  return (
    <LogoWrapper>
      <Image src={Logo__} alt="Logo" width={58} height={58} />
      <LogoText>Planète Discus</LogoText>
    </LogoWrapper>
  );
}
