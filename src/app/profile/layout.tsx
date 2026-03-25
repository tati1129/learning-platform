import Link from "next/link";
import React from "react";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside className="h-screen w-36 fixed p-4">
        <nav className="flex flex-col">
          <Link href={"/profile/my-programs"}>Programs</Link>
          <Link href={"/profile/my-account"}>Account</Link>
        </nav>
      </aside>
      <div className="ml-36 p-4">{children}</div>
    </div>
  );
}
