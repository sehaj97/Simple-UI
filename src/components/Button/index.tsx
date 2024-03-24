import { ButtonHTMLAttributes } from "react";

export enum ButtonType {
  PRIMARY = "blue",
  SECONDARY = "gray",
  SUCCESS = "green",
  DANGER = "red"
  // Add more types as needed
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonType;
  label: string;
}
export const Button = ({
  mode = ButtonType.PRIMARY,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`text-${mode}-400 border border-${mode}-400 hover:bg-${mode}-400 hover:text-white focus:bg-${mode}-700 focus:text-white`}
      {...props}
    >
      {label}
    </button>
  );
};
