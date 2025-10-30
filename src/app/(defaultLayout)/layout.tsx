import Footer from "@/components/homeLayout/Footer";
import Navbar from "@/components/homeLayout/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default CommonLayout;
