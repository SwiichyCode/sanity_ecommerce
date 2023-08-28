"use client";
import { useState } from "react";
import AuthForm from "@/app/(pages)/(app)/(auth)/_components/AuthForm";
import AuthCard from "../../../(auth)/_components/AuthCard";
type Props = {
  isCheckout?: boolean;
};

export default function CheckoutAuth({ isCheckout }: Props) {
  const [isSignUp, setIsSignup] = useState(false);

  return (
    <AuthCard>
      <AuthForm
        isSignUp={isSignUp}
        isCheckout={isCheckout}
        setIsSignUp={setIsSignup}
      />
    </AuthCard>
  );
}
