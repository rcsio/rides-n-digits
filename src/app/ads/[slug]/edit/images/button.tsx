"use client";

import clsx from "clsx";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Button() {
  const [pending, setPending] = useState(false);

  function handleClick() {
    setPending(true);

    setTimeout(() => {
      toast("Saved successfully", { type: "success" });
      window.scrollTo({ top: 0 });
      setPending(false);
    }, 500);
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      className={clsx(
        "button w-full bg-orange-500 text-white disabled:animate-pulse disabled:cursor-wait",
      )}
    >
      {pending ? "Please wait" : "Save"}
    </button>
  );
}
