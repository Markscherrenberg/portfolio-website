import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { forwardRef, PropsWithChildren } from "react";

type LinkProps = {
  as: "link" | "a";
  variant?: "primary" | "secondary" | "text";
  radius?: "button" | "lg";
  href: string;
  target?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  block?: boolean;
  className?: string;
  onClick?: () => void;
};

type ButtonProps = {
  variant?: "primary" | "secondary" | "text";
  radius?: "button" | "lg";
  disabled?: boolean;
  href?: string;
  as?: "button";
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  block?: boolean;
  className?: string;
};

const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps | LinkProps>
>((props, ref) => {
  const {
    children,
    variant,
    href,
    as,
    radius,
    startIcon,
    endIcon,
    className,
    block,
  } = props;

  const baseClasses =
    "px-7 py-2 font-medium focus:outline-none focus:ring-0 disabled:cursor-not-allowed";
  const variantClasses = clsx({
    "text-primary-950 bg-accent-300 hover:bg-accent-100 border border-accent-300 hover:border-accent-100 focus:border-accent-500":
      variant === "primary" || !variant,
    "border border-accent-300 text-accent-300 hover:border-accent-100 hover:text-accent-100 focus:bg-primary-900":
      variant === "secondary",
    "text-primary-50 hover:text-accent-300 focus:text-primary-600":
      variant === "text",
    "rounded-button": radius === "button" || !radius,
    "rounded-lg": radius === "lg",
    "flex items-center justify-center space-x-2": startIcon || endIcon,
    "w-full block": block,
  });
  const classes = twMerge(baseClasses, variantClasses, className);

  if (as === "link") {
    const { as: _, ...rest } = props;
    return (
      <Link draggable={false} {...rest} className={classes}>
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </Link>
    );
  }

  if (as === "a") {
    const { as: __, ...rest } = props;
    return (
      <a draggable={false} {...rest} className={classes}>
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </a>
    );
  }

  const { as: __, ...rest } = props;

  if (href) {
    return (
      <Link href={href} draggable={false}>
        <button ref={ref} {...rest} className={classes}>
          {startIcon}
          <span>{children}</span>
          {endIcon}
        </button>
      </Link>
    );
  }

  return (
    <button draggable={false} ref={ref} {...rest} className={classes}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
