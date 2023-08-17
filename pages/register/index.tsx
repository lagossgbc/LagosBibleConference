import Input from "../../components/shared/form/Input";
import RegistrationRadios from "../../components/shared/form/RegistrationRadios";
import Button from "../../components/shared/form/Button";
import Transition from "../../components/shared/ui/Transition";

import classes from "./register.module.scss";

const Register = () => {
  return (
    <Transition className={classes.Container}>
      <form>
        <h3>Registration</h3>
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
          label="Confirm Email*"
          name="confirmEmail"
          onInput={() => {}}
          errorText="Emails do not match: example@gmail.com"
        />
        <Input
          label="Phone*"
          name="phone"
          onInput={() => {}}
          errorText="Please enter a valid phone number"
        />
        <Input
          label="WhatsApp Number (if you wouldn’t mind being added to a WhatsApp group for the purpose of sending reminders)"
          name="whatsapp"
          onInput={() => {}}
          errorText="Please enter a valid phone number"
        />
        <RegistrationRadios />
        <footer>
          <Button text="SUBMIT" mode="pry" size="small" />
          <Button text="BACK TO HOMEPAGE" mode="pry" to="/" size="small" />
        </footer>
      </form>
    </Transition>
  );
};

export default Register;
