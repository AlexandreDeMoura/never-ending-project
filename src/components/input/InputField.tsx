import React from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

export type InputProps = {
  /**
   * Define the id of the input
   */
  id?: string;
  /**
   * Define the placeholder of the input
   */
  placeholder?: string;
  /**
   * Is the input disabled?
   */
  disabled?: boolean;
  /**
   * Define the content before the text input
   */
  leftSection?: React.ReactNode;
  /**
   * Define the content after the text input
   */
  rightSection?: React.ReactNode;
  /**
   * Is the input in a valid state?
   */
  isValid?: boolean;
} & React.ComponentPropsWithRef<"input">;

export const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      placeholder,
      disabled,
      leftSection,
      rightSection,
      isValid,
      // eslint-disable-next-line react/prop-types
      className,
      ...props
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const uniqueId = uuidv4();
    const inputId = id ? id : uniqueId;
    const errorId = `${inputId}-error`;

    const inputClasses = (error: boolean) =>
      classNames({
        "border-red-600 focus:ring-red-600 focus:border-red-600":
          !disabled && error,
        "border-gray-500 hover:border-gray-700 focus:ring-gray-700 focus:border-gray-700":
          !disabled && !error,
        "text-gray-900 placeholder-gray-500 transition duration-300": !disabled,
        "text-gray-900 placeholder-gray-300 border-gray-300 cursor-not-allowed":
          disabled,
        "form-input block w-full text-sm leading-5.5 rounded border p-2 outline-none":
          true,
      });

    return (
      <div className="w-full relative text-gray-500 transition-colors focus-within:text-gray-900">
        {leftSection ? (
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
            {leftSection}
          </div>
        ) : null}
        <input
          id={inputId}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          className={[
            inputClasses(isValid !== undefined && !isValid),
            className,
          ].join(" ")}
          aria-invalid={isValid !== undefined && !isValid}
          aria-describedby={
            isValid !== undefined && !isValid ? errorId : undefined
          }
          {...props}
        />
        {rightSection ? (
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            {rightSection}
          </div>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = "InputField";
