import clsx from "clsx";
import { nanoid } from "nanoid";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  srLabel?: boolean;
}

export default function Input({ id, label, srLabel, ...rest }: Props) {
  const _id = id || nanoid();

  return (
    <div className="grid gap-y-1">
      <label
        htmlFor={_id}
        className={clsx("justify-self-start", { "sr-only": srLabel })}
      >
        {label}
      </label>
      <input {...rest} className="input" id={_id} />
    </div>
  );
}
