import Image from "next/image";
import classes from "./404.module.scss";
import Button from "../components/form/Button";
import { eb_garamond } from "../fonts";

const NotFound = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Img}>
        <Image src="/images/404.webp" alt="Page not found" fill />
      </div>
      <h4 className={eb_garamond.className}>
        It seems you've missed your way...
      </h4>
      <Button text="Go Back Home" mode="pry" size="small" to="/" />
    </div>
  );
};

export default NotFound;
