import { AuthError } from "@supabase/supabase-js";
import clsx from "clsx";

type Props = {
  message: any;
  type?: "success" | "error" | undefined;
};

export default function Message({ message, type }: Props) {
  const handleMessageColor = () => {
    switch (type) {
      case "success":
        return "text-green-500";
      case "error":
        return "text-red-500";
      default:
        return "text-green-500";
    }
  };

  return (
    <p
      className={clsx("text-center text-xs font-medium", handleMessageColor())}
    >
      {message}
    </p>
  );
}
