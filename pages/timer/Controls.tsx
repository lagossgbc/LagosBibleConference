import { useEffect } from "react";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import { BsFillPlayFill, BsPauseCircle } from "react-icons/bs";
import { BiReset } from "react-icons/bi";

interface IProps {
  isMaximized: any;
  setIsMaximized: React.Dispatch<React.SetStateAction<boolean>>;
  TimerStarted: boolean;
  setTimerStarted: React.Dispatch<React.SetStateAction<boolean>>;
  reset: any;
}
const Controls: React.FC<IProps> = ({
  isMaximized,
  setIsMaximized,
  TimerStarted,
  setTimerStarted,
  reset,
}) => {
  const toggleMaximize = () => {
    if (!isMaximized) {
      // Maximize the window
      const elem = document.documentElement;
      const requestFullScreen =
        // @ts-ignore
        elem.requestFullscreen || elem.webkitRequestFullScreen;
      if (requestFullScreen) {
        requestFullScreen.call(elem);
        setIsMaximized(true);
      }
    } else {
      // Minimize the window
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsMaximized(false);
      }
    }
  };

  useEffect(() => {
    const fullscreenChange = () => {
      setIsMaximized(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChange);
    document.addEventListener("webkitfullscreenchange", fullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChange);
      document.removeEventListener("webkitfullscreenchange", fullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape" && isMaximized) {
        toggleMaximize();
      }
    };

    document.addEventListener("keyup", handleEscapeKey);

    return () => {
      document.removeEventListener("keyup", handleEscapeKey);
    };
  }, [isMaximized]);
  return (
    <div
      style={{
        position: "absolute",
        left: "1rem",
        bottom: "1rem",
        display: "flex",
        flexDirection: "column",
        width: "30rem",
        justifyContent: "center",
        alignItems: "right",
        gap: "2rem",
        zIndex: 2000,
      }}
    >
      <div onClick={toggleMaximize}>
        {isMaximized ? (
          <FiMinimize title="Minimize" />
        ) : (
          <FiMaximize title="Maximize" />
        )}
      </div>
      <div onClick={() => setTimerStarted((prev) => !prev)}>
        {TimerStarted ? (
          <BsPauseCircle title="Pause" />
        ) : (
          <BsFillPlayFill title="Start" />
        )}
      </div>
      <div onClick={reset}>
        <BiReset title="Reset" />
      </div>
    </div>
  );
};

export default Controls;
