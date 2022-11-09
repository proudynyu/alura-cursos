import {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from "react";

import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

/**
 * @export
 * @description Custom Input
 * @param { InputProps }
 * @param ref React Reference to be used in the form to get the input value
 * @version 1.0.0
 */
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
