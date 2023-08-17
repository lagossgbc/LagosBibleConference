import Transition from "../../components/shared/ui/Transition";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

import Input from "../../components/shared/form/Input";
import Button from "../../components/form/Button";

import classes from "./Contact.module.scss";

const ContactPage = () => {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Left}>
        <div className={classes.Inner}>
          <h3>For Enquires</h3>
          <h4>Contact Us at:</h4>
          <div>
            <MdLocationOn style={{ fontSize: "6rem", marginTop: "-1.5rem" }} />
            <p>
              Plot 451A Oluwadamilola Fasade Street, Omole Phase 1, Ojodu Berger
              Road Lagos
            </p>
          </div>
          <div>
            <MdCall />
            <p>
              Call: <a href="tel:+2348067526446">+2348067526446</a>
            </p>
          </div>
          <div>
            <MdEmail />
            <p>
              Email: <a href="mailto:info@sgbc.ng">info@sgbc.ng</a>
            </p>
          </div>
          <div>
            <h4 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Hours:</h4>
          </div>
          <div className={classes.Contact}>
            Mondays to Fridays: 10am - 4pm <br />
            Satudray: Closed <br />
            Sunday: 8am -6pm <br />
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        <form>
          <h3>Contact Us</h3>
          <Input
            label="Name*"
            name="name"
            onInput={() => {}}
            errorText="Name must have at least 5 valid characters"
          />
          <Input
            label="Email*"
            name="email"
            onInput={() => {}}
            errorText="Please enter a valid email: example@gmail.com"
          />
          <Input
            label="Phone*"
            name="phone"
            onInput={() => {}}
            errorText="Please enter a valid phone number"
          />
          <Input
            label="How may we help?*"
            name="confirmEmail"
            onInput={() => {}}
            errorText="Emails do not match: example@gmail.com"
            type="textarea"
          />

          <footer>
            <Button text="SEND" mode="pry" size="small" />
            <Button text="BACK TO HOMEPAGE" mode="pry" to="/" size="small" />
          </footer>
        </form>
      </div>
    </Transition>
  );
};

export default ContactPage;
