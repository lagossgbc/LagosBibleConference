import Footer from "./footer/Footer";
import Navigation from "./navigation/Navbar";
import Mobile from "./footer/Mobile";

import classes from "./Layout.module.scss";
import ScrollUpButton from "../components/shared/ScrollUpBtn";

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={classes.Container}>
      <Navigation />
      <main>{children}</main>
      <ScrollUpButton />
      <Footer />
      <Mobile />
    </div>
  );
};

export default Layout;
