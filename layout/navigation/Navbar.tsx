import { useEffect, useState } from "react";

import navData from "./navData";

import { alfa_slab_one, poppins } from "../../fonts";

import Link from "next/link";

import Button from "../../components/form/Button";
import MobileNav from "./MobileNav";
import { MenuMode } from "./types";
import SideNav from "./SideNav";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [ShowSideNav, setShowSideNav] = useState(false);
  const [ActiveNav, setActiveNav] = useState("");
  const [Animate, setAnimate] = useState<MenuMode>("x-leave");

  const handleHamburgerClick = () => {
    if (ShowSideNav) {
      setShowSideNav(false);
      setAnimate("x-leave");
    } else {
      setAnimate("x-enter");
      setShowSideNav(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#NavBar");
      if (navbar) {
        const scrolled = window.scrollY > 100;
        if (scrolled) {
          navbar.classList.add(classes.Scroll);
        } else {
          navbar.classList.remove(classes.Scroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${classes.Container} `} id="NavBar">
        <ul className={poppins.className}>
          {navData.map((item) => (
            <li
              key={item.title}
              className={ActiveNav == item.href ? classes.Active : ""}
              onClick={() => setActiveNav(item.href)}
            >
              {item.href !== "/register" ? (
                <Link href={item.href}>
                  {item.img ? (
                    <div className={classes.Logo}>
                      <img src={item.img} alt="LBC Logo" />
                      <span className={alfa_slab_one.className}>
                        {item.title}
                      </span>
                    </div>
                  ) : (
                    item.title
                  )}
                </Link>
              ) : (
                <div style={{ marginTop: "-1rem !important" }}>
                  <Button
                    text="REGISTER"
                    to="/register"
                    mode="pry"
                    size="small"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <MobileNav handleHamburgerClick={handleHamburgerClick} />
      <SideNav onClose={handleHamburgerClick} animate={Animate} />
    </>
  );
};

export default Navbar;
