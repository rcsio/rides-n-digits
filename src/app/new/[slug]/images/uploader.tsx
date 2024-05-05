"use client";

import { addImage, deleteImage } from "@/app/new/[slug]/images/actions";
import {
  ArrowPathIcon,
  PhotoIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ChangeEvent, useId, useRef, useState } from "react";

export default function Uploader() {
  const id = useId();
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string>();

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];

    if (!file) {
      setUrl(undefined);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setPending(true);
    const url = await addImage(formData);

    setUrl(url);
    setPending(false);
  }

  async function handleDelete() {
    setPending(true);
    await deleteImage(url!);
    setPending(false);

    inputRef.current!.value = "";
    setUrl(undefined);
  }

  return (
    <>
      <input
        type="file"
        accept=".jpg, .jpeg"
        className="sr-only"
        id={id}
        onChange={handleChange}
        ref={inputRef}
        disabled={pending}
      />

      <div className="relative">
        <label
          htmlFor={id}
          className={clsx(
            "flex aspect-card cursor-pointer items-center justify-center rounded-xl bg-stone-200 bg-cover bg-center",
            pending && "cursor-wait",
          )}
          style={{ backgroundImage: url ? `url(${url})` : undefined }}
        >
          {!pending && !url && (
            <PhotoIcon className="h-12 w-12 text-stone-400" />
          )}

          {pending && (
            <ArrowPathIcon className="h-12 w-12 animate-spin text-orange-500" />
          )}

          <div className="sr-only">Select photo</div>
        </label>

        {url && (
          <button
            onClick={handleDelete}
            disabled={pending}
            className={clsx(
              "absolute right-2 top-2 rounded-full bg-white/80 shadow-sm backdrop-blur",
              pending && "cursor-wait",
            )}
          >
            <XCircleIcon className="h-6 w-6 text-red-600/90" />
            <span className="sr-only">Delete</span>
          </button>
        )}
      </div>
    </>
  );
}
