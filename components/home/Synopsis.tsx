import classes from "./Synopsis.module.scss";
import Button from "../shared/form/Button";

const Synopsis = () => {
  return (
    <section className={classes.Container}>
      <h3>SYNOPSIS</h3>
      <p>
        In the words of the Shorter Catechism, “man’s chief end is to glorify
        God and to enjoy Him forever.” This statement directs the thoughts of
        man away from himself and focuses it entirely upon God who made him,
        sustains him and redeemed him. Sadly, many in the church who profess to
        be Christians live for themselves and not God who ‘saved’ them. In an
        age of rampant man-centeredness in worship and life, we feel the need to
        remind the church of the goal of her existence via the theme: Communion
        with God. The aim of the conference will be to re-introduce the doctrine
        of communion with God, and to explore the rich communion that every
        believer has with God. We pray and hope for a revival of true heart
        (lively) religion and a decline of what J.C. Ryle terms formalism. Our
        hope is that the conference will inspire in all who gather a desire to
        further cultivate the communion which believers are given to enjoy with
        the Father, pre-eminently in his love; with the Son, pre-eminently in
        his grace; and with the Holy Spirit pre-eminently in his comfort.
      </p>
      <div className={classes.Button}>
        <Button text="LEARN MORE" mode="pry" to="/schedule" size="small" />
      </div>
    </section>
  );
};

export default Synopsis;
