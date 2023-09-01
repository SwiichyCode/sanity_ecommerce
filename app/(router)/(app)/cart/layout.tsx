import CartLayout from "@/app/_components/layouts/CartLayout";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <CartLayout>{children}</CartLayout>;
}
