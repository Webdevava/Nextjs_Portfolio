// components/Layout.jsx
import BottomNav from "./BottomNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <BottomNav />
      <Footer/>
    </div>
  );
};

export default Layout;
