import React from "react";
import classNames from "classnames";

export type ButtonProps = {
  /**
   * Define the type of the button: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">MDN Docs</a>
   */
  type: "button" | "submit" | "reset";
  /**
   * Define the appearance of the button
   */
  appearance?: "primary" | "outline";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Define custom classnames
   */
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

/**
 * Main button component for user interaction.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      appearance = "primary",
      size = "medium",
      children,
      className,
      ...props
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const appearanceClasses = (appearance: string) =>
      classNames({
        rounded: size === "small",
        "rounded-lg": size !== "small",
        "bg-gray-900 border-gray-900 text-white hover:bg-gray-700 hover:border-gray-700 disabled:bg-gray-300 disabled:border-gray-300":
          !appearance || appearance === "primary",
        "bg-white text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700 disabled:text-gray-300 disabled:border-gray-300":
          appearance === "outline",
        "inline-flex items-center font-bold transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-opacity-30 disabled:cursor-not-allowed":
          true,
      });
    const sizeClasses = (size: string) =>
      classNames({
        border: size === "small",
        "border-2": size !== "small",
        "text-xs px-2.5 py-1.75": !size || size === "small",
        "text-sm px-3.5 py-2": !size || size === "medium",
        "text-md px-9.5 py-3.5": size === "large",
      });

    return (
      <button
        ref={ref}
        type={type}
        className={[
          appearanceClasses(appearance),
          sizeClasses(size),
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
