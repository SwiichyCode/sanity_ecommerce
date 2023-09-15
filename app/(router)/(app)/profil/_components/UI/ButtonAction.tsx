import clsx from "clsx";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
  variants?: "confirm" | "cancel" | "edit";
  type?: "button" | "submit" | "reset";
};

export default function ButtonAction({ text, type, onClick, variants }: Props) {
  const handleVariants = (variants: string | undefined) => {
    switch (variants) {
      case "confirm":
        return "text-[#00c48c]";
      case "cancel":
        return "text-[#ff0000]";
      case "edit":
        return "text-[#0080ff]";
    }
  };

  return (
    <button
      className={clsx("text-base font-semibold", handleVariants(variants))}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
