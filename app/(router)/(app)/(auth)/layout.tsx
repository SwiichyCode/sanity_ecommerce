import AuthLayout from "@/app/_components/layouts/AuthLayout";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}
