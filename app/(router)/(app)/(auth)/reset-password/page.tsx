"use client";
import { useEffect, useState } from "react";
import AuthServices from "@/app/_modules/auth/_services/auth.service";

export default function ResetPage() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await AuthServices.updatePassword(password);

    console.log(error);
  };

  return (
    <form onSubmit={(e: any) => handleSubmit(e)}>
      <h1>Reset Password</h1>

      <input
        type="password"
        value={password}
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Reset Password</button>
    </form>
  );
}
