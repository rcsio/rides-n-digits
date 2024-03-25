import clsx from "clsx";
import { nanoid } from "nanoid";
import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  srLabel?: boolean;
}

export default function Textarea({ id, label, srLabel, ...rest }: Props) {
  const _id = id || nanoid();

  return (
    <div className="grid gap-y-1">
      <label
        htmlFor={_id}
        className={clsx("justify-self-start", { "sr-only": srLabel })}
      >
        {label}
      </label>
      <textarea {...rest} id={_id}></textarea>
    </div>
  );
}
