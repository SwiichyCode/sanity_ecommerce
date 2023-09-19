"use client";
import Image from "next/image";
import Logo__ from "@/public/Alt_1.svg";
import { LogoWrapper, LogoText } from "./styles";

export default function Logo() {
  return (
    <LogoWrapper href={"/"}>
      <Image src={Logo__} alt="Logo" width={48} height={48} />
      <LogoText>Planète Discus</LogoText>
    </LogoWrapper>
  );
}
