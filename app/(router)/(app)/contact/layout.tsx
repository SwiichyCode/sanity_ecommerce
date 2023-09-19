import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export default function ContactLayout({ children }: Props) {
  return (
    <div
      className={clsx("flex flex-col items-center my-14 responsive-padding")}
    >
      {children}
    </div>
  );
}
