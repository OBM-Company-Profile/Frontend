import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
}: ButtonProps) {
  return (
    <button className={cn(ButtonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
}

const ButtonVariants = cva(
  "font-semibold font-montserrat uppercase place-items-center",
  {
    variants: {
      variant: {
        outline:
          "px-6 py-3 text-sm my-8 inline-flex border border-ne01 text-ne01 bg-transparent hover:bg-ne01 hover:text-pr08",
        primary:
          "px-6 py-3 text-sm my-2 inline-flex place-items-center bg-sc06 text-ne01 hover:bg-pr03",
        none: "hidden",
      },
      size: {
        sm: "text-sm px-1 py-1",
        md: "text-base px-3 py-3",
        lg: "text-xl p-6",
      },
      default: {
        type: "primary",
        size: "sm",
      },
    },
  }
);
