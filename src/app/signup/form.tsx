"use client";

import useUser from "@/hooks/useUser";
import axios from "@/lib/axios";
import Input from "@/ui/input";
import { isAxiosError } from "axios";
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

    const formData = new FormData(formRef.current!);
    formData.set("password_confirmation", formData.get("password")!);

    try {
      await axios.post("/register", formData);
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
      <Input label="Name" name="name" required tabIndex={1} />
      <Input label="Email" name="email" type="email" required tabIndex={2} />

      <Input
        label="Password"
        name="password"
        type="password"
        minLength={8}
        required
        tabIndex={3}
      />

      <button
        className="button w-full bg-orange-500 font-bold text-white disabled:animate-pulse disabled:cursor-wait"
        tabIndex={4}
        disabled={loading}
      >
        Sign up
      </button>
    </form>
  );
}
