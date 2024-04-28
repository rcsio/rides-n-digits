import { camelCase } from "change-case";
import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  srLabel?: boolean;
}

export default function Textarea({ id, label, name, srLabel, ...rest }: Props) {
  const _id = id || name || camelCase(label);

  return (
    <div className="grid gap-y-1">
      <label
        htmlFor={_id}
        className={clsx("justify-self-start", { "sr-only": srLabel })}
      >
        {label}
      </label>
      <textarea name={name} {...rest} id={_id}></textarea>
    </div>
  );
}
