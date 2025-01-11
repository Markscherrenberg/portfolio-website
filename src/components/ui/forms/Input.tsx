import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  hasError?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  color?: "darker";
  [key: string]: any;
}

export default function Input({
  label,
  type = "text",
  hasError,
  color,
  ...rest
}: InputProps) {
  const baseClasses =
    "rounded-lg py-3 px-4 border placeholder:text-primary-400 focus:border-accent-300 focus:text-accent-300 focus:outline-none disabled:bg-primary-900 disabled:text-primary-600 disabled:cursor-not-allowed";
  const variantClasses = clsx({
    "text-primary-50 border-primary-900": !hasError,
    "text-error border-error": hasError,
    "bg-primary-950 ": color === "darker",
    "bg-transparent": !color,
  });

  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-primary-50 text-sm">{label}</label>}

      {type === "textarea" ? (
        <textarea
          className={baseClasses + " " + variantClasses}
          {...rest}
        ></textarea>
      ) : (
        <input
          type={type}
          className={baseClasses + " " + variantClasses}
          {...rest}
        />
      )}
    </div>
  );
}
