import Image from "next/image";
import Transition from "../../components/shared/ui/Transition";
import { eb_garamond, quicksand } from "../../fonts";
import schedule from "../../data/schedule";
import Button from "../../components/form/Button";

import classes from "./Schedule.module.scss";
import Head from "next/head";

const SchedulePage = () => {
  return (
    <Transition className={classes.Container}>
      <Head>
        <title>LBC | Schedule for 2023</title>
      </Head>
      <div className={classes.Top}>
        <div className={classes.Hands}>
          <Image src="/images/praying.svg" alt="LBC Logo" fill />
        </div>
        <div className={classes.TextContainer}>
          <div className={classes.Text}>
            <Image src="/images/communion-text.svg" alt="LBC Logo" fill />
          </div>
          <h4 className={quicksand.className}>2nd - 4th November, 2023</h4>
        </div>
      </div>
      <section className={classes.Sessions}>
        <h3>SESSIONS</h3>

        <div className={classes.Schedule}>
          {schedule.map((day, topIndex) => (
            <div key={topIndex}>
              <h4 className={eb_garamond.className}>{day.day}</h4>
              <ul>
                {day.topics.map((item, index) => (
                  <li key={index}>
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

        <h3>SEMINARS</h3>
        <div className={classes.Seminars}>
          <div>
            <h5 className={quicksand.className}>Theology Sessions</h5>
            <ol>
              <li>
                1. The Heresy of Modalism | <b>Austin Huggins</b>
              </li>
              <li>
                2. The Subtle and Dangerous Error of Hyper Grace Teaching |
                <b>Austin Huggins</b>
              </li>
              <li>
                3. Strange Fire | <b>Austin Huggins</b>
              </li>
            </ol>
          </div>
          <div>
            <h5 className={quicksand.className}>
              Family Sessions (for ladies)
            </h5>
            <ol>
              <li>
                1. An Excellent Wife (Prov. 31:10-31) | <b>Mrs Kalifungwa</b>
              </li>
              <li>
                2. Biblical Submission | <b>Mrs Kalifungwa</b>
              </li>
              <li>
                3. The Role of Women in the Church | <b>Mrs Kalifungwa</b>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default SchedulePage;
