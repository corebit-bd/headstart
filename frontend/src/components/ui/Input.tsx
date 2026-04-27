import * as React from "react";
import { cn } from "@/lib/utils/helpers";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      fullWidth = false,
      startIcon,
      endIcon,
      disabled,
      id,
      ...props
    },
    reference,
  ) => {
    // ALWAYS Call "useId" Unconditionally
    const generatedId = React.useId();

    // Use the Provided ID / The Generated One
    const inputId = id || generatedId;
    const helperTextId = `${inputId}-helper-text`;
    const errorId = `${inputId}-error`;

    // Base Styles
    const baseStyles =
      "p-1 m-1 flex h-10 w-full rounded-md border-2 bg-white px-3 py-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-brand-grey-400)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[var(--color-brand-grey-900)]";

    // Input States
    const stateStyles = error
      ? "border-[var(--color-error-500)] text-[var(--color-error-900)] focus-visible:ring-2 focus-visible:ring-[var(--color-error-500)] dark:text-[var(--color-error-100)]"
      : "border-[var(--color-brand-grey-300)] text-[var(--color-black-900)] focus-visible:border-[var(--color-info-500)] focus-visible:ring-2 focus-visible:ring-[var(--color-info-500)] dark:border-[var(--color-brand-grey-600)] dark:text-white";

    // Icon Wrapper Styles
    const iconWrapperStyles =
      "absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--color-brand-grey-500)] dark:text-[var(--color-brand-grey-400)]";

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error
                ? "text-red-700 dark:text-red-400"
                : "text-gray-700 dark:text-gray-300",
            )}
          >
            {label}
          </label>
        )}

        {/* Input Wrapper with Icons */}
        <div className={cn("relative", fullWidth && "w-full")}>
          {/* Start Icon */}
          {startIcon && (
            <div className={cn(iconWrapperStyles, "left-3")}>
              <span className="h-5 w-5">{startIcon}</span>
            </div>
          )}

          {/* Input Field */}
          <input
            ref={reference}
            type={type}
            id={inputId}
            className={cn(
              baseStyles,
              stateStyles,
              startIcon && "pl-10",
              endIcon && "pr-10",
              className,
            )}
            disabled={disabled}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            {...props}
          />

          {/* End Icon */}
          {endIcon && (
            <div className={cn(iconWrapperStyles, "right-3")}>
              <span className="h-5 w-5">{endIcon}</span>
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && !error && (
          <p
            id={helperTextId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p
            id={errorId}
            className="text-sm font-medium text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
