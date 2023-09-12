"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/_modules/auth/_hooks/useUser";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  margin: 8.8rem 0;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const router = useRouter();

  if (user && user.aud !== "authenticated") {
    router.push("/signin");
  }

  return (
    <LayoutWrapper className="responsive-padding">{children}</LayoutWrapper>
  );
}
