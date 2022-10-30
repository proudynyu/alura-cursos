import {
  FC,
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from "react";

import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { labelText, ...props },
  ref
) => {
  return (
    <div className="input-container">
      <label htmlFor={props?.name}>{labelText}</label>
      <input {...props} ref={ref} />
    </div>
  );
};

export const Input = forwardRef(InputComponent);
