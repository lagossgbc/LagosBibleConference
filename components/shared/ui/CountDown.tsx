"use client";

import { useEffect, useState } from "react";
import Timer from "../../utils/timer";

import { poppins, quicksand } from "../../../fonts";

import classes from "./CountDown.module.scss";

const CountDown = ({ date }: { date: Date }) => {
  const [RemainingTime, setRemainingTime] = useState({
    textDay: 0,
    textHour: 0,
    textMinute: 0,
    textSecond: 0,
  });

  useEffect(() => {
    let timer: NodeJS.Timer = setInterval(() => {
      const rem = Timer(date);
      setRemainingTime(rem);
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const addZero = (arg: number) => (arg < 10 ? "0" + arg : arg);

  return (
    <>
      <h3 className={poppins.className + " " + classes.Lead}>
        COUNT DOWN TO LBC ‘23
      </h3>
      <article className={classes.Container}>
        <div className={classes.Inner}>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textDay)}
            </h6>
            <p className={poppins.className}>Days</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textHour)}
            </h6>
            <p className={poppins.className}>Hours</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textMinute)}
            </h6>
            <p className={poppins.className}>Minutes</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textSecond)}
              {/* {addZero(RemainingTime.textSecond - 1)} */}
            </h6>
            <p className={poppins.className}>Seconds</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default CountDown;
