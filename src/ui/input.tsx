import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  srLabel?: boolean;
}

export default function Input({
  label,
  placeholder,
  srLabel,
  type,
  ...rest
}: Props) {
  return (
    <label className="grid gap-y-2">
      <span
        className={clsx("select-none font-bold leading-none", {
          "sr-only": srLabel,
        })}
      >
        {label}
      </span>
      <input
        type={type}
        className="rounded-full border border-stone-200 placeholder-stone-300"
        placeholder={placeholder}
        {...rest}
      />
    </label>
  );
}
