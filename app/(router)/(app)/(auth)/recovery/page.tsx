import AuthCard from "@/app/_modules/auth/_components/AuthCard";
import RecoveryForm from "@/app/_modules/auth/_components/RecoveryForm";
import { Suspense } from "react";

export default function RecoveryPage() {
  return (
    <AuthCard>
      <Suspense fallback={<div>Loading...</div>}>
        <RecoveryForm />
      </Suspense>
    </AuthCard>
  );
}
