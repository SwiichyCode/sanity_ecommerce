import AppLayoutWrapper from "@/app/_components/layouts/AppLayout";
import MainLayout from "@/app/_components/layouts/MainLayout";
import Header from "@/app/_components/_organisms/Header";
import Footer from "@/app/_components/_organisms/Footer";

type Props = {
  children: React.ReactNode;
};

export const dynamic = "force-dynamic";

export default function AppLayout({ children }: Props) {
  return (
    <AppLayoutWrapper>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </AppLayoutWrapper>
  );
}
