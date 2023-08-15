import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import classes from "./Social.module.scss";

const Social = () => {
  return (
    <div className={classes.Container}>
      <a href="https://youtube.com/@SGBCLagos" target="__blank">
        <BsYoutube />
      </a>
      <a href="https://www.instagram.com/sgbclagos/" target="__blank">
        <BsInstagram />
      </a>
      <a href="https://twitter.com/SGBCLagos" target="__blank">
        <BsTwitter />
      </a>
      <a href="https://facebook.com/SGBCLagos" target="__blank">
        <BsFacebook />
        &nbsp;@SGBCLagos
      </a>
    </div>
  );
};

export default Social;
