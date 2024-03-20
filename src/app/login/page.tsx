import Input from "@/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mt-16 px-4">
      <h1 className="grid place-items-center">
        <span className="text-3xl font-bold">Log in</span>{" "}
        <span className="text-xl font-bold">for a better experience.</span>
      </h1>

      <form action="" className="mt-12 grid gap-y-6">
        <Input label="Email" type="email" required tabIndex={1} />

        <div className="relative">
          <Input label="Password" type="password" required tabIndex={2} />
          <p className="absolute right-0 top-0 leading-none">
            <Link href="/forgot-password" tabIndex={4} className="underline">
              Forgot<span className="sr-only"> password</span>?
            </Link>
          </p>
        </div>

        <button
          className="button bg-orange-500 font-bold text-white"
          tabIndex={3}
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline" tabIndex={5}>
          Sign up.
        </Link>
      </p>
    </div>
  );
}
