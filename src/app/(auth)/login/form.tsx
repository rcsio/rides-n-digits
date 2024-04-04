"use client";

import { login } from "@/app/(auth)/actions";
import Button from "@/app/(auth)/button";
import Input from "@/ui/input";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function Form() {
  const [state, action] = useFormState(login, null);

  useEffect(() => {
    if (state?.message) toast(state.message, { type: "error" });
  }, [state]);

  return (
    <form action={action} className="mx-4 mt-12 space-y-6">
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

      <Button tabIndex={3}>Log in</Button>
    </form>
  );
}
