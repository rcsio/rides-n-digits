import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
  srLabel?: boolean;
}

export default function Textarea({
  className,
  label,
  srLabel,
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
      <textarea
        {...rest}
        className={clsx("rounded-xl border border-stone-200", {
          [`${className}`]: className,
        })}
      />
    </label>
  );
}
