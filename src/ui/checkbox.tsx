import { nanoid } from "nanoid";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  name: string;
}

export default function Checkbox({ id, children, ...rest }: Props) {
  const _id = id || nanoid();

  return (
    <div className="flex items-center gap-x-2">
      <label htmlFor={_id} className="order-2">
        {children}
      </label>
      <input {...rest} type="checkbox" id={_id} className="order-1" />
    </div>
  );
}
