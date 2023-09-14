"use client";

import ErrorMessage from "@/app/_components/_atoms/Message/ErrorMessage";
import SuccessMessage from "@/app/_components/_atoms/Message/SuccessMessage";
import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");

  return (
    <>
      {error && <ErrorMessage message={error} />}
      {message && <SuccessMessage message={message} />}
    </>
  );
}
