import { camelCase } from "change-case";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  name: string;
}

export default function Checkbox({ id, children, name, ...rest }: Props) {
  const _id = id || name || camelCase(children);

  return (
    <div className="flex items-center gap-x-2">
      <label htmlFor={_id} className="order-2">
        {children}
      </label>
      <input
        {...rest}
        name={name}
        type="checkbox"
        id={_id}
        className="order-1"
      />
    </div>
  );
}
