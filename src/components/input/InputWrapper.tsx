import React from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { InputProps } from "./InputField";

export type InputWrapperProps = {
  /**
   * Define the id of the input
   */
  id?: string;
  /**
   * Define the label of the input
   */
  label: string;
  /**
   * Should the label be shown?
   */
  hideLabel?: boolean;
  /**
   * Does the input have a validation error?
   */
  error?: React.ReactNode | (() => string);
  /**
   * The actual length of the input value
   */
  actualLength?: number;
  /**
   * Does the input have a length counter
   */
  maxLength?: number;
  /**
   * Should the error be shown?
   */
  hideError?: boolean;
  /**
   * Does the input have a help message?
   */
  help?: React.ReactNode;
  /**
   * Is the input disabled?
   */
  disabled?: boolean;
  children: React.ReactElement;
} & React.ComponentPropsWithoutRef<"label">;

export const InputWrapper: React.FunctionComponent<InputWrapperProps> = ({
  id,
  label,
  hideLabel,
  actualLength,
  maxLength,
  error,
  hideError,
  help,
  disabled,
  // eslint-disable-next-line react/prop-types
  className,
  children,
  ...props
}: InputWrapperProps) => {
  const uniqueId = uuidv4();
  const inputWrapperId = id ? id : uniqueId;
  const errorId = `${inputWrapperId}-error`;

  const labelClasses = (hideLabel: boolean) =>
    classNames({
      "text-red-600": !hideLabel && error && !disabled,
      "text-gray-700": !hideLabel && !error && !disabled,
      "text-gray-300": !hideLabel && disabled,
      "flex items-center text-xs font-semibold uppercase tracking-wider":
        !hideLabel,
      "sr-only": hideLabel,
    });

  const counterClasses = (actualLength: number, maxLength: number) =>
    classNames({
      "text-gray-700": actualLength <= maxLength,
      "text-red-600": actualLength > maxLength,
      "text-xs mt-2 flex flex-shrink-0": true,
    });

  const inputProps: InputProps = { id: inputWrapperId, isValid: !error };
  if (disabled) {
    inputProps.disabled = true;
  }

  return (
    <div className="w-full">
      <label
        htmlFor={inputWrapperId}
        className={[labelClasses(!!hideLabel), className].join(" ")}
        {...props}
      >
        {label}
      </label>
      <div className={hideLabel ? "" : "mt-2"}>
        {React.cloneElement(children, inputProps)}
      </div>
      <div className="flex flex-nowrap justify-between space-x-4">
        {!error && !help && actualLength !== undefined && maxLength ? (
          <div></div>
        ) : null}
        {error ? (
          <div
            className={
              hideError ? "sr-only" : "flex flex-wrap mt-2 text-xs text-red-600"
            }
            id={errorId}
            role="alert"
          >
            {error as any}
          </div>
        ) : null}
        {!error && help ? (
          <div className="flex flex-wrap mt-2 text-xs text-gray-700">
            {help}
          </div>
        ) : null}
        {actualLength !== undefined && maxLength ? (
          <div className={counterClasses(actualLength, maxLength)}>
            {actualLength} / {maxLength}
          </div>
        ) : null}
      </div>
    </div>
  );
};

InputWrapper.displayName = "InputWrapper";
