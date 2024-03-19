import Logo from "@/../public/images/logo.png";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between border-b border-b-stone-200 bg-white p-4">
        <li>
          <Link href="/">
            <span className="sr-only">Home</span>
            <Image src={Logo} alt="Logo of Rides 'n' Digits" />
          </Link>
        </li>
        <div className="flex items-center gap-x-2">
          <li>
            <Link href="/new" className="button bg-orange-500 text-white">
              Place Ad
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="inline-flex aspect-square min-h-10 items-center justify-center"
            >
              <span className="sr-only">Home</span>
              <Squares2X2Icon className="h-6 w-6 text-orange-500" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
