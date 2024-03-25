"use client";

import { XCircleIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, useEffect, useState } from "react";

const MAX_PHOTOS = 4;

export default function Photos() {
  const [files, setFiles] = useState<File[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const _files = Array.from(e.currentTarget.files!);

    const newFiles = _files.filter((_f) => {
      return !files.some((f) => f.name === _f.name);
    });

    const remaining = MAX_PHOTOS - files.length;

    if (remaining > 0) {
      setFiles((prevState) => [...prevState, ...newFiles.slice(0, remaining)]);
    }
  }

  return (
    <>
      {files.map((file, i) => (
        <div key={i} className="relative w-full shrink-0">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image file={file} />

          <button
            type="button"
            className="absolute right-1 top-1 flex aspect-square min-h-10 items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm"
            onClick={() => {
              setFiles(files.filter((_file) => _file.name !== file.name));
            }}
          >
            <span className="sr-only">Remove</span>
            <XCircleIcon className="h-4 w-4 text-red-600" />
          </button>
        </div>
      ))}

      {files.length < MAX_PHOTOS && (
        <label className="button w-full cursor-pointer border border-blue-500 bg-white hover:bg-blue-100 has-[:focus]:bg-blue-100">
          <input
            type="file"
            accept=".jpg, .jpeg"
            name="photos"
            multiple
            className="sr-only"
            tabIndex={6}
            onChange={handleChange}
          />
          {files.length > 0 ? "Add more photos" : "Choose photos"}
        </label>
      )}
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
