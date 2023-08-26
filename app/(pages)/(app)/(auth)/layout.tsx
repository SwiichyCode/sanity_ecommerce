"use client";
import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const AuthLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--bg-radial);
  padding: 2.4rem;
`;

export default function AuthLayout({ children }: Props) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
