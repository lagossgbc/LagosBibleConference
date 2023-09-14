import Footer from "./footer/Footer";
import Navigation from "./navigation/Navbar";
import Mobile from "./footer/Mobile";

import ScrollUpButton from "../components/shared/ScrollUpBtn";
import CaptchaContainer from "../components/shared/CaptchaContainer";

import classes from "./Layout.module.scss";

interface IProps {
  children?: React.ReactNode;
  className?: any;
}

const Layout: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={classes.Container + " " + className}>
      <Navigation />
      <CaptchaContainer>
        <main>{children}</main>
      </CaptchaContainer>
      <ScrollUpButton />
      <Footer />
      <Mobile />
    </div>
  );
};

export default Layout;
