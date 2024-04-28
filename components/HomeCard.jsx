import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HomeCard = ({className , img , title , description , handleClick}) => {
  return (
    <div
      className={cn("px-4 py-6 flex flex-col justify-between w-full xl:max-w-[290px] min-h-[260px] rounded-[14px] cursor-pointer" , className)}
      onClick={() => {handleClick()}}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img}
          alt= {`${title}-icon`}
          width={27}
          height={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
