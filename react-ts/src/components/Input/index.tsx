import { FC, InputHTMLAttributes } from "react";

import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Input: FC<InputProps> = ({ labelText, ...props }) => {
  return (
    <div className="input-container">
      <label htmlFor={props?.name}>{labelText}</label>
      <input {...props} />
    </div>
  );
};
