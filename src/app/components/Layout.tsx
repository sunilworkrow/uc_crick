import Footer from "./Footer";
import Header from "./Header";
import PhoneMenu from "./PhoneMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <PhoneMenu /> 
    </>
  );
};

export default Layout;
