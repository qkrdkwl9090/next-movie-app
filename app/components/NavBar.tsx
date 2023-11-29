"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center gap-[10px] py-5 shadow-nav-bar">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-orange-500" : ""
        } text-18 font-bold`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "text-orange-500" : ""
        } text-18 font-bold`}
      >
        About
      </Link>
    </nav>
  );
}
