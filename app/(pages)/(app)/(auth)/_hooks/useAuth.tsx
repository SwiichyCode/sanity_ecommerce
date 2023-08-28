import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthServices from "../_services/auth.service";

interface AuthData {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AuthResult {
  status: "idle" | "loading" | "error";
  handleAuth: (data: AuthData) => Promise<void>;
  openConfirmation: boolean;
  errorMessage: string | null;
}

export function useAuth(isSignUp: boolean, isCheckout?: boolean): AuthResult {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleAuth: AuthResult["handleAuth"] = async ({ email, password }) => {
    try {
      setStatus("loading");
      const { error } = isSignUp
        ? await AuthServices.signUp(email, password)
        : await AuthServices.signIn(email, password);

      if (!error) {
        handleSuccess(isSignUp);
      } else {
        setErrorMessage(error.message);
      }

      setStatus("idle");
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  const handleSuccess = (isSignUp: boolean) => {
    setOpenConfirmation(true);
    setTimeout(() => {
      setOpenConfirmation(false);
      if (isSignUp) {
        router.push("/signin");
        router.refresh();
      } else {
        isCheckout ? null : router.push("/");

        router.refresh();
      }
    }, 1000);
  };

  return { status, handleAuth, openConfirmation, errorMessage };
}
