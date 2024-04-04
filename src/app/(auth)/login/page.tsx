import Form from "@/app/(auth)/login/form";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className="mx-4 mt-16 text-center">
        <span className="text-3xl font-bold">Log in</span>
        <br />
        <span className="text-xl font-bold"> for a better experience.</span>
      </h1>

      <Form />

      <p className="mt-6 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline" tabIndex={5}>
          Sign up.
        </Link>
      </p>
    </>
  );
}
