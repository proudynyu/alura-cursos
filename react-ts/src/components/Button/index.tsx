import { ButtonHTMLAttributes, FC } from "react";

import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

/**
 * @export
 * @description Custom Button
 * @param { ButtonProps }
 * @version 1.0.0
 */
export const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return <button {...rest}>{title}</button>;
};
