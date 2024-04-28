"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";

import { sidebarLinks } from "@/constants";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="sticky left-0 top-0 flex h-[100vh] w-fit flex-col justify-between bg-[#371B05] p-6 pt-28 text-white-1 max-sm:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn(`flex gap-4 items-center p-4 rounded-lg justify-start hover:bg-[#481E14]`, {
                                "bg-[#8B322C]": isActive,
                            })}>
                            <Image
                                src={link.imgUrl}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-lg font-semibold max-lg:hidden">
                                {link.label}
                            </p>
                            {/* {link.label} */}
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default Sidebar;
