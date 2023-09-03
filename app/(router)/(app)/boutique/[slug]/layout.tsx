import ProductLayout from "@/app/_components/layouts/ProductLayout";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <ProductLayout>{children}</ProductLayout>;
}
