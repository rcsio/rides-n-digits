import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="button w-full bg-orange-500 font-bold text-white disabled:animate-pulse disabled:cursor-wait"
      tabIndex={3}
    >
      Log in
    </button>
  );
}
