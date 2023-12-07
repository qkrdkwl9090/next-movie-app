"use client";

import { usePathname } from "next/navigation";

export default function Detail() {
  const pathName = usePathname();
  const id = pathName?.slice(1);
  return (
    <div>
      <h4>{id || "Loading..."}</h4>
    </div>
  );
}
