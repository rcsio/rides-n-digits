"use client";

import { createImage, deleteImage } from "@/app/ads/[slug]/edit/images/actions";
import { Image } from "@/types";
import {
  ArrowPathIcon,
  PhotoIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ChangeEvent, useId, useRef, useState } from "react";

type Props = {
  defaultImage?: Omit<Image, "created_at" | "updated_at">;
  productId: number;
};

export default function Uploader({ defaultImage, productId }: Props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(defaultImage);
  const [pending, setPending] = useState(false);

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("product_id", productId.toString());

    setPending(true);
    const image = await createImage(formData);

    setImage(image);
    setPending(false);
  }

  async function handleDelete() {
    setPending(true);

    await deleteImage(image!.filename);
    setPending(false);

    inputRef.current!.value = "";
    setImage(undefined);
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
          style={{
            backgroundImage: image ? `url(${image.href})` : undefined,
          }}
        >
          {!pending && !image && (
            <PhotoIcon className="h-12 w-12 text-stone-400" />
          )}

          {pending && (
            <ArrowPathIcon className="h-12 w-12 animate-spin text-orange-500" />
          )}

          <div className="sr-only">Select photo</div>
        </label>

        {image && (
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
