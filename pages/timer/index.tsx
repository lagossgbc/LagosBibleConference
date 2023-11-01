import { useEffect, useState } from "react";
import { quicksand } from "../../fonts";

import Controls from "./Controls";
import TimerForm from "./TimerForm";

import classes from "./Timer.module.scss";

const CountDown = () => {
  const [TimerStarted, setTimerStarted] = useState(false);
  const [Reset, setReset] = useState(true);
  const [Description, setDescription] = useState("");
  const [TimeInMinutes, setTimeInMinutes] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!TimerStarted) return;
      setTimeInMinutes((prevTime) => {
        prevTime = prevTime;
        if (prevTime > 0) {
          return prevTime - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [TimerStarted]);

  const startTimer = () => {
    if (minutes == 0 && seconds == 0) return;
    setReset(false);
    setTimerStarted((prev) => !prev);
  };

  const reset = () => {
    setTimeInMinutes(0);
    setReset(true);
    setTimerStarted(false);
  };

  const minutes = Math.floor(TimeInMinutes / 60);
  const seconds = TimeInMinutes % 60;
  const TimeUp = minutes == 0 && seconds == 0 && !Reset;

  return (
    <div
      className={`${classes.Outside} ${
        minutes < 5 && !Reset ? classes.RoundUp : ""
      }`}
    >
      <Controls
        isMaximized={isMaximized}
        setIsMaximized={setIsMaximized}
        setTimerStarted={startTimer}
        TimerStarted={TimerStarted}
        reset={reset}
      />
      <TimerForm
        TimeInMinutes={TimeInMinutes}
        setTimeInMinutes={setTimeInMinutes}
        Description={Description}
        setDescription={setDescription}
        TimerStarted={TimerStarted}
        setTimerStarted={setTimerStarted}
        style={isMaximized || TimerStarted ? { display: "none" } : {}}
      />
      <h3 className={`${classes.Lead} ${TimeUp ? classes.TimeUp : ""}`}>
        {TimeUp
          ? "Time Up!!!"
          : minutes < 5 && !Reset
          ? "You have less than 5 minutes, Please round up."
          : Description}
      </h3>
      <article className={classes.Container}>
        <div className={classes.Inner}>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {minutes?.toString().padStart(2, "0")}
            </h6>
            <p>Minutes</p>
          </div>
          <div className={classes.Box}>
            <h6 className={quicksand.className}>
              {seconds?.toString().padStart(2, "0")}
            </h6>
            <p>Seconds</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountDown;
