import clsx from "clsx";

type Props = {
  label: string;
  placeholder?: string;
  srLabel?: boolean;
  type: "email" | "password" | "text" | "search";
};

export default function Input({ label, placeholder, srLabel, type }: Props) {
  return (
    <label className="grid gap-y-1">
      <span
        className={clsx("font-bold leading-none", {
          "sr-only": srLabel,
        })}
      >
        {label}
      </span>
      <input
        type={type}
        className="rounded-full border border-stone-200 placeholder-stone-300"
        placeholder={placeholder}
      />
    </label>
  );
}
