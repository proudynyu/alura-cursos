import { ButtonHTMLAttributes, FC } from "react";

import "./styles.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return <button {...rest}>{title}</button>;
};
