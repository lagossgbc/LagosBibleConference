import { InputProps } from "./types";

import classes from "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  required = false,
  autoComplete = "off",
  className,
  label = "",
  placeholder = "",
  errorText,
  onInput,
}) => {
  if (type == "text") {
    return (
      <div className={`${classes.Container} ${className ? className : ""}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          name={name}
          id={name}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
        />
        {/* <small>{errorText}</small> */}
      </div>
    );
  } else {
    return (
      <div className={`${classes.Container} ${className ? className : ""} `}>
        {label && <label htmlFor={name}>{label}</label>}
        <textarea
          name={name}
          id={name}
          rows={10}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
        />
        {/* <small>{errorText}</small> */}
      </div>
    );
  }
};

export default Input;
