import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface IDefaultLayoutProps {
  className?: string;
}

export default function DefaultLayout({ children }: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
