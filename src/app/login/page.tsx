import Input from "@/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className="mx-4 mt-16 text-center">
        <span className="text-3xl font-bold">Log in</span>
        <br />
        <span className="text-xl font-bold"> for a better experience.</span>
      </h1>

      <form action="" className="mx-4 mt-12 space-y-6">
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
          className="button w-full bg-orange-500 font-bold text-white"
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
    </>
  );
}
