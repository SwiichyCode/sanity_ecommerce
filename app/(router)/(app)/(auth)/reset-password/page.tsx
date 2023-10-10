import { ResetPasswordForm } from "@/app/_modules/auth/_components/ResetPasswordForm";
import { Suspense } from "react";

export default function ResetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
