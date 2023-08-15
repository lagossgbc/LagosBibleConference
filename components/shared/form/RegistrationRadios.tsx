import Input from "./Input";
import classes from "./RegistrationRadios.module.scss";

const RegistrationRadios = () => {
  return (
    <div className={classes.Container}>
      <p>How did you hear about Lagos Bible Conference?</p>
      <div className={classes.Radios}>
        <div className={classes.Radio}>
          <input type="radio" name="info" id="social" className="pointer" />
          <label htmlFor="social" className="pointer">
            Social Media
          </label>
        </div>
        <div className={classes.Radio}>
          <input type="radio" name="info" id="invited" className="pointer" />
          <label htmlFor="invited" className="pointer">
            Invited by someone
          </label>
        </div>
        <div className={classes.Radio}>
          <input type="radio" name="info" id="member" className="pointer" />
          <label htmlFor="member" className="pointer">
            I'm a church member
          </label>
        </div>
        <div className={classes.Radio}>
          <input type="radio" name="info" id="other" className="pointer" />
          <label htmlFor="other" className={classes.Last}>
            Other ...
          </label>
        </div>
        <Input
          name="specify"
          onInput={() => {}}
          placeholder="Please specify"
          className={classes.SpecifyInput}
        />
      </div>
    </div>
  );
};

export default RegistrationRadios;
