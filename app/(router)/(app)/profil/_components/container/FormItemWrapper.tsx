import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export default function FormItemWrapper({ children }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col items-start",
        "sm:flex-row sm:justify-between sm:items-center"
      )}
    >
      {children}
    </div>
  );
}
