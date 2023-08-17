"use client";

import { useEffect, useState } from "react";
import Timer from "../../utils/timer";

import { quicksand } from "../../../fonts";

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
    <div className={classes.Outside}>
      <h3 className={classes.Lead}>COUNT DOWN TO LBC ‘23</h3>
      <article className={classes.Container}>
        <div className={classes.Inner}>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textDay)}
            </h6>
            <p>Days</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textHour)}
            </h6>
            <p>Hours</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textMinute)}
            </h6>
            <p>Minutes</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {addZero(RemainingTime.textSecond)}
            </h6>
            <p>Seconds</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountDown;
