import AuthCard from "../_components/AuthCard";
import AuthForm from "../_components/AuthForm";

export default function SignUpPage() {
  return (
    <>
      <AuthCard>
        <AuthForm isSignUp={true} />
      </AuthCard>
    </>
  );
}