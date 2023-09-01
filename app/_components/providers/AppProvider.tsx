"use client";
import StyledLayout from "@/app/_components/providers/StyledProvider";

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}
