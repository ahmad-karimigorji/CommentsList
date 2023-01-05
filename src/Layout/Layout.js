import Header from "../Component/ComponentOfLayout/Header";
import Footer from "../Component/ComponentOfLayout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
