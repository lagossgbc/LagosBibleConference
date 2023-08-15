import { SideNavProps } from "./types";
import Backdrop from "../../components/modal/Backdrop";
import SideNavContent from "./SideNavContent";

import classes from "./SideNav.module.scss";

const SideNav: React.FC<SideNavProps> = ({ onClose, animate }) => {
  return (
    <>
      {animate === "x-enter" && <Backdrop onClick={onClose} />}
      <aside
        className={`${classes.Container} ${
          animate === "x-enter"
            ? classes.In
            : animate === "x-leave"
            ? classes.Out
            : ""
        }`}
      >
        <SideNavContent handleClose={onClose} />
      </aside>
    </>
  );
};

export default SideNav;
