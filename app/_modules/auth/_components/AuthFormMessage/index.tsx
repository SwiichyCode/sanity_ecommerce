"use client";

import Message from "@/app/_components/_atoms/Message";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthFormMessage() {
  const searchParams = useSearchParams();
  const [type, setType] = useState<"success" | "error">();
  const [message, setMessage] = useState<string | null | undefined>();

  const handleParams = () => {
    if (searchParams.get("error")) {
      setType("error");
      setMessage(searchParams.get("error"));
    } else {
      setType("success");
      setMessage(searchParams.get("message"));
    }
  };

  useEffect(() => {
    handleParams();
  }, []);

  return <Message message={message} type={type} />;
}
