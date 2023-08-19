import { useState } from "react";

import { open_sans } from "../../../fonts";
import { InputProps } from "./types";

import classes from "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  required = false,
  autoComplete = "off",
  onChange,
  disabled,
  value,
  className,
  label,
  errorText,
  border,
  pattern = "",
}) => {
  const [Focused, setFocused] = useState(false);

  const handleBlur = () => {
    if (!Focused) setFocused(true);
  };

  let content: React.ReactNode;
  if (type === "textarea") {
    content = (
      <textarea
        className={`${border ? classes.border : ""} myInput`}
        name={name}
        cols={30}
        rows={10}
        id={name}
        required={required}
        autoComplete={autoComplete}
        minLength={20}
        maxLength={2000}
        onChange={onChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        data-focused={Focused.toString()}
        disabled={disabled}
      ></textarea>
    );
  } else {
    content = (
      <input
        className={`${border ? classes.border : ""} myInput`}
        type={type}
        id={name}
        name={name}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
        data-focused={Focused.toString()}
        disabled={disabled}
      />
    );
  }

  return (
    <div className={`${classes.Container} ${className ? className : ""}`}>
      <label
        htmlFor={name}
        className={classes.Label + " " + open_sans.className}
      >
        {label}
      </label>
      {content}

      {Focused && <span className={classes.ErrorText}>{errorText}</span>}
    </div>
  );
};

export default Input;
