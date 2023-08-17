import { alfa_slab_one } from "../../fonts";

import Image from "next/image";
import Social from "./Social";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.Container}>
      <div className={classes.Top}>
        <div className={classes.Img}>
          <Image src="/logo.webp" alt="LBC Logo" width={200} height={160} />{" "}
        </div>
        <div>
          <h4 className={alfa_slab_one.className}>Lagos Bible</h4>
          <h4 className={alfa_slab_one.className}>Conference</h4>
        </div>
      </div>
      <div className={classes.Bottom}>
        <p className={classes.Base}>
          Sovereign Grace Bible Church © {new Date().getFullYear()}. All Rights
          Reserved.
        </p>

        <div className={classes.Group1}>
          <p>
            <b>Contact us on</b> <span>Phone</span>:
            <a href="tel:+2348067526446">+2348067526446</a> <span>Email</span>:{" "}
            <a href="mailto:info@sgbc.ng">info@sgbc.ng</a>
          </p>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
