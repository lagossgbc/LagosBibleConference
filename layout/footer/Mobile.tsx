import Button from "../../components/form/Button";
import { open_sans } from "../../fonts";
import Social from "./Social";

import classes from "./Mobile.module.scss";

const Mobile = () => {
  return (
    <footer className={classes.Container}>
      <Button
        text="REGISTER"
        to="https://lbc2023-register.evenito.site/#rsvp"
        mode="pry"
        size="small"
        target="__blank"
        className={open_sans.className + " " + classes.Btn}
      />
      <h4>Contact</h4>
      <div className={classes.Contact}>
        <p>
          Call: <a href="tel:+2348067526446">+2348067526446</a>{" "}
        </p>
        <p>
          email:<a href="mailto:info@sgbc.ng">info@sgbc.ng</a>
        </p>
      </div>
      <Social />
      <p className={classes.Sovereign}>
        Sovereign Grace Bible Church © 2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Mobile;
