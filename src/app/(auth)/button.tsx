import { useFormStatus } from "react-dom";

type Props = { children: string; tabIndex: number };

export default function Button({ children, tabIndex }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="button w-full bg-orange-500 font-bold text-white disabled:animate-pulse disabled:cursor-wait"
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
}
