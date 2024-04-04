import Form from "@/app/(auth)/signup/form";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <h1 className="mx-4 mt-16 text-center">
        <span className="text-3xl font-bold">Sign up</span>
        <br />
        <span className="text-xl font-bold"> for a better experience.</span>
      </h1>

      <Form />

      <p className="mt-6 text-center">
        Already have an account?{" "}
        <Link href="/login" className="underline" tabIndex={5}>
          Log in.
        </Link>
      </p>
    </>
  );
}
