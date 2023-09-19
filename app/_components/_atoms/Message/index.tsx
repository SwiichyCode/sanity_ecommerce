import clsx from "clsx";

type Props = {
  message: string | null | undefined;
  type: "success" | "error" | undefined;
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
