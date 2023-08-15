import Transition from "../../components/shared/ui/Transition";
import { poppins, quicksand } from "../../fonts";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

import classes from "./Contact.module.scss";
import Input from "../../components/shared/form/Input";
import Button from "../../components/form/Button";

const ContactPage = () => {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Left}>
        <div className={classes.Inner}>
          <h3 className={poppins.className}>For Enquires</h3>
          <h4 className={poppins.className}>Contact Us at:</h4>
          <div>
            <MdLocationOn style={{ fontSize: "6rem", marginTop: "-1.5rem" }} />
            <p className={quicksand.className}>
              Plot 451A Oluwadamilola Fasade Street, Omole Phase 1, Ojodu Berger
              Road Lagos
            </p>
          </div>
          <div>
            <MdCall />
            <p className={quicksand.className}>
              Call: <a href="tel:+2348067526446">+2348067526446</a>
            </p>
          </div>
          <div>
            <MdEmail />
            <p className={quicksand.className}>
              Email: <a href="mailto:info@sgbc.ng">info@sgbc.ng</a>
            </p>
          </div>
          <div>
            <h4
              className={poppins.className}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              Hours:
            </h4>
          </div>
          <div className={classes.Contact + " " + quicksand.className}>
            Mondays to Fridays: 10am - 4pm <br />
            Satudray: Closed <br />
            Sunday: 8am -6pm <br />
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        <h3 className={poppins.className}>Contact Us</h3>
        <form>
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
