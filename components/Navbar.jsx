"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton, UserProfile, SignedOut, useUser, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex-between fixed z-50 w-full bg-[#371B05] px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/images/yo-meet-logo.png"
          width={32}
          height={32}
          alt="yo-meet-logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white-1 max-sm:hidden">
          YO-MEET
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
