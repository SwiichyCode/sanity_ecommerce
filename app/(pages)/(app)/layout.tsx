import AppLayoutWrapper from "@/app/_components/AppLayoutWrapper";
import MainLayoutWrapper from "@/app/_components/MainLayoutWrapper";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer/_index";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <AppLayoutWrapper>
      {/* <Header /> */}
      <MainLayoutWrapper>{children}</MainLayoutWrapper>
      <Footer />
    </AppLayoutWrapper>
  );
}
