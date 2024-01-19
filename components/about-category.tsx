import React from "react";
import { Framework } from "@/data/about";
import Image from "next/image";
interface AboutCategoryProps {
  title: string;
  listItem: Array<{ name: string; icon: string }>;
}
const AboutCategoryLayout = ({ title, listItem }: AboutCategoryProps) => {
  return (
    <div className="flex max-lg:flex-col lg:gap-0 md:gap-6 gap-5 max-lg:items-start">
      <p className="bg-title text-left lg:w-[175px] text-transparent bg-clip-text">
        {title}
      </p>
      <div className="flex flex-1 flex-wrap gap-[58px] max-lg:gap-12 max-md:gap-8 items-center">
        {listItem.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <div className="relative w-20 h-20 max-lg:w-[72px] max-lg:h-[72px] max-md:w-[60px] max-md:h-[60px]">
              <Image src={item.icon} alt={item.icon} fill objectFit="contain" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCategoryLayout;