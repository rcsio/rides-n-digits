import Nav from "@/ui/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rides 'n' Digits",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-dvh bg-stone-100 text-stone-800`}
      >
        <header className="sticky top-0 z-50">
          <Nav />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
