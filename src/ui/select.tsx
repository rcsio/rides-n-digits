import { camelCase } from "change-case";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: { label: string; value: string | number }[];
  srLabel?: boolean;
}

export default function Select(props: Props) {
  const { id, label, name, options, srLabel, ...rest } = props;
  const _id = id || name || camelCase(label);

  return (
    <div className="grid gap-y-1">
      <label
        htmlFor={_id}
        className={clsx("justify-self-start", "sr-only" && srLabel)}
      >
        {label}
      </label>
      <select {...rest} name={name} id={_id} className="input">
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
