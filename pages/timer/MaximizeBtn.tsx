import { useEffect } from "react";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import Button from "../../components/form/Button";

interface IProps {
  isMaximized: any;
  setIsMaximized: React.Dispatch<React.SetStateAction<boolean>>;
  TimerStarted: boolean;
  setTimerStarted: React.Dispatch<React.SetStateAction<boolean>>;
}
const MaximizeBtn: React.FC<IProps> = ({
  isMaximized,
  setIsMaximized,
  TimerStarted,
  setTimerStarted,
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
        right: "3rem",
        display: "flex",
        width: "15rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <Button
        size="small"
        text={TimerStarted ? "Pause" : "Start"}
        onClick={() => setTimerStarted((prev) => !prev)}
      />
      <div onClick={toggleMaximize}>
        {isMaximized ? <FiMinimize /> : <FiMaximize />}
      </div>
    </div>
  );
};

export default MaximizeBtn;
