"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { children: string; href: string };

export function NavLink({ children, href }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      replace
      className={clsx(
        "button border border-blue-500 transition-colors",
        href === pathname ? "bg-blue-100" : "bg-white text-blue-950",
      )}
    >
      {children}
    </Link>
  );
}
