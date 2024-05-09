"use client";

import Input from "@/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";

export default function SearchForm() {
  const searchParams = useSearchParams();

  return (
    <form action="/search" className="mx-4 mt-4 flex items-center gap-x-2">
      <div className="w-full">
        <Input
          label="Search"
          name="name"
          placeholder="Search for cars, motorcycles, airplanes, bicycles, boats, etc."
          type="search"
          defaultValue={searchParams.get("name") || ""}
          srLabel
        />
      </div>
      <button className="inline-flex aspect-square h-10 items-center justify-center rounded-full bg-blue-500">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      </button>
    </form>
  );
}
