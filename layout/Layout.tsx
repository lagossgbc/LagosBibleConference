import Footer from "./footer/Footer";
import Navigation from "./navigation/Navbar";
import Mobile from "./footer/Mobile";

import classes from "./Layout.module.scss";
import ScrollUpButton from "../components/shared/ScrollUpBtn";
import { useEffect } from "react";
import axios from "axios";

interface IProps {
  children?: React.ReactNode;
  className?: any;
}

const Layout: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={classes.Container + " " + className}>
      <Navigation />
      <main>{children}</main>
      <ScrollUpButton />
      <Footer />
      <Mobile />
    </div>
  );
};

export default Layout;
