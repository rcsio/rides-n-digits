"use client";

import { uploadImage } from "@/app/new/actions";
import { ChangeEvent, useEffect, useState } from "react";

export default function Photos() {
  const [file, setFile] = useState<File>();

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];
    setFile(file);

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    await uploadImage(formData);
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {file && <Image file={file} />}

      <label className="button w-full cursor-pointer border border-blue-500 bg-white hover:bg-blue-100 has-[:focus]:bg-blue-100">
        <input
          type="file"
          accept=".jpg, .jpeg"
          name="file"
          className="sr-only"
          tabIndex={6}
          onChange={handleChange}
          required
        />
        {file ? "Change image" : "Select image"}
      </label>
    </>
  );
}

function Image({ file }: { file: File }) {
  const [dataUrl, setDataUrl] = useState<string>();

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => setDataUrl(event.target!.result as string);
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dataUrl}
      alt=""
      className="aspect-card w-full rounded-xl bg-stone-200 object-cover"
    />
  );
}
