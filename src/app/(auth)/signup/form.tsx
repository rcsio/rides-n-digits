"use client";

import { signup } from "@/app/(auth)/actions";
import Button from "@/app/(auth)/button";
import Input from "@/ui/input";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function Form() {
  const [state, action] = useFormState(signup, null);

  useEffect(() => {
    if (state?.message) toast(state.message, { type: "error" });
  }, [state]);

  return (
    <form action={action} className="mx-4 mt-12 space-y-6">
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

      <Button tabIndex={4}>Sign up</Button>
    </form>
  );
}
