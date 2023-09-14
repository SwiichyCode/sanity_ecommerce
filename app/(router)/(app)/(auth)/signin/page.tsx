import AuthCard from "../../../../_modules/auth/_components/AuthCard";
import AuthForm from "../../../../_modules/auth/_components/AuthForm";

export default function SignInPage() {
  return (
    <AuthCard>
      <AuthForm isSignUp={false} />
    </AuthCard>
  );
}
