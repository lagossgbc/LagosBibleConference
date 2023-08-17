import Link from "next/link";

interface ButtonProps {
  type?: "button" | "submit";
  text: string;
  size?: "small";
  mode?: "pry" | "sec";
  disabled?: boolean;
  target?: "__blank";
  to?: string;
  className?: any;
  style?: any;
  onClick?: () => void;
}

import classes from "./Button.module.scss";
import { poppins } from "../../pages/_app";
const Button: React.FC<ButtonProps> = ({
  type = "button",
  target,
  to,
  text,
  onClick,
  mode,
  disabled,
  size,
  className,
}) => {
  const classesConsts = `${classes.Button} ${mode ? classes[mode] : ""}  ${
    size ? classes[size] : ""
  } ${className ? className : ""} ${disabled ? classes.Disabled : ""} ${
    poppins.className
  }`;
  if (to) {
    return (
      <Link href={to} target={target && "__blank"} className={classesConsts}>
        {text}
      </Link>
    );
  } else if (type === "submit") {
    return (
      <button type="submit" className={classesConsts}>
        {text}
      </button>
    );
  }
  // button type
  return (
    <button
      type="button"
      className={classesConsts}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  );
};

export default Button;
