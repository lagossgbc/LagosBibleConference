import Image from "next/image";
import Transition from "../../components/shared/ui/Transition";
import classes from "./Schedule.module.scss";
import { eb_garamond, poppins, quicksand } from "../../fonts";
import schedule from "../../data/schedule";
import Button from "../../components/form/Button";

const page = () => {
  return (
    <Transition className={classes.Container}>
      <div className={classes.Top}>
        <Image
          src="/images/communion.webp"
          alt="Communion Image"
          fill
          sizes="1000px"
          className={classes.DesktopImage}
        />
        <Image
          src="/images/communion-mobile.webp"
          alt="Communion Image"
          fill
          sizes="500px"
          className={classes.MobileImage}
        />
      </div>
      <section className={classes.Sessions}>
        <h3 className={poppins.className}>SESSIONS</h3>

        <div className={classes.Schedule}>
          {schedule.map((day, topIndex) => (
            <div key={topIndex}>
              <h4 className={eb_garamond.className}>{day.day}</h4>
              <ul>
                {day.topics.map((item, index) => (
                  <li key={index} className={poppins.className}>
                    <span className={classes.Num1}>{index + 1}. </span>
                    <div>
                      <span className={classes.Num2}>{index + 1}. </span>
                      <span className={classes.Topic}>{item.topic}: </span>
                      <span className={classes.Desc}>{item.desc}</span> |&nbsp;
                      <b>{item.speaker}</b>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={classes.Btn}>
            <Button
              text="DOWNLOAD PDF"
              to="/schedule.pdf"
              mode="sec"
              size="small"
              target="__blank"
            />
          </div>
        </div>

        <h3 className={poppins.className}>SEMINARS</h3>
        <div className={classes.Seminars}>
          <div>
            <h5 className={quicksand.className}>Theology Sessions</h5>
            <ol>
              <li>1. The Heresy of Modalism | Austin Huggins</li>
              <li>
                2. The Subtle and Dangerous Error of Hyper Grace Teaching | Joe
                Jacowitz
              </li>
              <li>3. Spiritism in the Church | Osinachi Nwoko</li>
            </ol>
          </div>
          <div>
            <h5 className={quicksand.className}>Family Sessions</h5>
            <ol>
              <li>1. Redeeming Productivity | Joshua Abutu</li>
              <li>2. Christian Meditation in a Busy City | Tony Okoroh</li>
              <li>3. Private and Family Worship | Osagie Azeta</li>
            </ol>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default page;
