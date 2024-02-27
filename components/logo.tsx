import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ href, small }: { href: string; small?: boolean }) => {
  return (
    <div>
      <Link
        href={href}
        className={cn("flex items-center w-10", small && "w-8 justify-center")}
      >
        {/* <Image
          src="/logo.png"
          className="dark:hidden"
          width={120}
          height={40}
          alt="img"
        />
        <Image
          src="/logo-dark.png"
          className="hidden dark:block"
          width={120}
          height={40}
          alt="img"
        /> */}
        <h1 className="font-bold text-2xl">M</h1>
        <span className={cn("font-semibold text-2xl", small && "hidden")}>
          Logo
        </span>
      </Link>
    </div>
  );
};

export default Logo;
