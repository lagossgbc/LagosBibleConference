// Delete This if the first works
export type InputProps = {
  type?: "text" | "password" | "number" | "url" | string;
  name: string;
  required?: boolean;
  autoComplete?: string;
  onInput: any;
  className?: string;
  label?: string;
  errorText?: string;
  placeholder?: string;
};

export type ButtonProps = {
  type?: string;
  text: React.ReactNode;
  disabled?: boolean;
  to?: string;
  target?: "__blank";
  onClick?: () => void;
  mode?: "pry" | "danger" | "sec";
  size?: "small" | "medium";
  className?: any;
};
