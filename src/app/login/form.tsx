"use client";

import useUser from "@/hooks/useUser";
import axios from "@/lib/axios";
import Input from "@/ui/input";
import { isAxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { data: user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && user) router.replace("/");
  }, [isLoading, router, user]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    await axios.get("/sanctum/csrf-cookie");

    try {
      await axios.post("/login", formRef.current);
      router.replace("/");
    } catch (error) {
      if (!isAxiosError(error)) throw error;
      toast(error.response?.data.message, { type: "error" });
      setLoading(false);
    }
  }

  return (
    <form
      className="mx-4 mt-12 space-y-6"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <Input label="Email" name="email" type="email" required tabIndex={1} />

      <div className="relative">
        <Input
          label="Password"
          name="password"
          type="password"
          required
          tabIndex={2}
        />

        <p className="absolute right-0 top-0">
          <Link href="/forgot-password" tabIndex={4} className="underline">
            Forgot<span className="sr-only"> password</span>?
          </Link>
        </p>
      </div>

      <button
        className="button w-full bg-orange-500 font-bold text-white disabled:animate-pulse disabled:cursor-wait"
        tabIndex={3}
        disabled={loading}
      >
        Log in
      </button>
    </form>
  );
}
