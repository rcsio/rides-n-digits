"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="button w-full bg-orange-500 text-white disabled:animate-pulse"
      disabled={pending}
      type="submit"
    >
      {pending ? "Please wait" : "Next"}
    </button>
  );
}
