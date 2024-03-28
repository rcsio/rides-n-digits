import { camelCase } from "change-case";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  srLabel?: boolean;
}

export default function Input({ id, label, name, srLabel, ...rest }: Props) {
  const _id = id || name || camelCase(label);

  return (
    <div className="grid gap-y-1">
      <label
        htmlFor={_id}
        className={clsx("justify-self-start", { "sr-only": srLabel })}
      >
        {label}
      </label>
      <input {...rest} name={name} className="input" id={_id} />
    </div>
  );
}
