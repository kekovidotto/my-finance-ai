"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/*ESQUERDA*/}
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="My Finance AI" width={173} height={39} />
        <Link
          href="/"
          className={pathname === "/" ? "text-primary font-bold" : ""}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions" ? "text-primary font-bold" : ""
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription" ? "text-primary font-bold" : ""
          }
        >
          Assinatura
        </Link>
      </div>
      {/*DIREITA*/}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
