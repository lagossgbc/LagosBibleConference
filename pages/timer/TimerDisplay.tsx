// "use client";
// import { useEffect, useState } from "react";
// import { quicksand } from "../../fonts";

// import classes from "./Timer.module.scss";

// interface IProps {
//   initialMinutes: number;
//   TimerStarted: boolean;
// }
// const TimerDisplay: React.FC<IProps> = ({ initialMinutes, TimerStarted }) => {
//   const [TimeInMinutes, setTimeInMinutes] = useState(initialMinutes * 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (!TimerStarted) return;
//       setTimeInMinutes((prevTime) => {
//         if (prevTime > 0) {
//           return prevTime - 1;
//         }
//         return 0;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [TimerStarted, initialMinutes, TimeInMinutes]);

//   const minutes = Math.floor(TimeInMinutes / 60);
//   const seconds = TimeInMinutes % 60;
//   console.log({ minutes, TimeInMinutes, initialMinutes, seconds });

//   return (
//     <article className={classes.Container}>
//       <div className={classes.Inner}>
//         <div className={classes.Box}>
//           <h6 className={quicksand.className}>
//             {minutes}
//             {/* {minutes.toString().padStart(2, "0")} */}
//           </h6>
//           <p>Minutes</p>
//         </div>
//         <div className={classes.Box}>
//           <h6 className={quicksand.className}>
//             {seconds}
//             {/* {seconds.toString().padStart(2, "0")} */}
//           </h6>
//           <p>Seconds</p>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default TimerDisplay;
import React from "react";

const TimerDisplay = () => {
  return <div>TimerDisplay</div>;
};

export default TimerDisplay;
