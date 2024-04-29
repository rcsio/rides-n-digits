"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  pendingText: string;
}

export default function Button(props: Props) {
  const { pending } = useFormStatus();
  const { children, className, pendingText, ...rest } = props;

  return (
    <button
      className={clsx("button w-full disabled:animate-pulse", className)}
      disabled={pending}
      {...rest}
    >
      {pending ? pendingText : children}
    </button>
  );
}
