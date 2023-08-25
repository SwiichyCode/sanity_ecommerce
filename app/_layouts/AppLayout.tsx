"use client";
import StyledLayout from "./StyledLayout";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}
