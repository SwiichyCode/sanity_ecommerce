"use client";
import StyledComponentsRegistry from "@/app/_lib/registry";
import GlobalStyle from "@/app/_styles/globalStyles";

type Props = {
  children: React.ReactNode;
};

export default function StyledLayout({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
}
