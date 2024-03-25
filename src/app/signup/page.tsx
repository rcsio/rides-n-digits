import Input from "@/ui/input";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="mt-16 px-4">
      <h1 className="grid place-items-center">
        <span className="text-3xl font-bold">Sign up</span>{" "}
        <span className="text-xl font-bold">for a better experience.</span>
      </h1>

      <form action="" className="mt-12 grid gap-y-6">
        <Input label="Email" name="email" type="email" required tabIndex={1} />
        <Input
          label="Password"
          name="password"
          type="password"
          required
          tabIndex={2}
        />

        <button
          className="button bg-orange-500 font-bold text-white"
          tabIndex={3}
        >
          Sign up
        </button>
      </form>

      <p className="mt-6 text-center">
        Already have an account?{" "}
        <Link href="/login" className="underline" tabIndex={4}>
          Log in.
        </Link>
      </p>
    </div>
  );
}
