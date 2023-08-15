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
  if (to) {
    return (
      <Link
        href={to}
        target={target && "__blank"}
        className={`${classes.Button} ${mode ? classes[mode] : ""}  ${
          size ? classes[size] : ""
        } ${className ? className : ""} ${disabled ? classes.Disabled : ""}`}
      >
        {text}
      </Link>
    );
  } else if (type === "submit") {
    return (
      <button
        type="submit"
        className={`${classes.Button} ${mode ? classes[mode] : ""}  ${
          size ? classes[size] : ""
        }  ${className ? className : ""}  ${disabled ? classes.Disabled : ""}`}
      >
        {text}
      </button>
    );
  }
  // button type
  return (
    <button
      type="button"
      className={`${classes.Button} ${mode ? classes[mode] : ""}  ${
        className ? className : ""
      }  ${size ? classes[size] : ""}  ${disabled ? classes.Disabled : ""}`}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  );
};

export default Button;
