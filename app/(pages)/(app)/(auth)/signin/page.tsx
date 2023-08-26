import AuthCard from "../_components/AuthCard";
import AuthForm from "../_components/AuthForm";

export default function SignInPage() {
  return (
    <>
      <AuthCard>
        <AuthForm isSignUp={false} />
      </AuthCard>
    </>
  );
}
