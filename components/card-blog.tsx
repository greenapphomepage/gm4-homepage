"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Pricing } from "@/types/Pricing";
import useLinearCard from "@/lib/linear-card";
import { useRouter } from "next/navigation";
import { Blog } from "@/types/Blog";

const CustomCard = motion(Card);
const CardBlog = ({ title, description, thumbnail, category ,id , slug }: Blog) => {
  const router = useRouter();
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard();
  return (
    <CustomCard
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col rounded-2xl bg-[#010618] text-white border-[#212a39] text-[14px] custom-cursor group"
      style={{
        background:
          "radial-gradient(70.7% 70.7% at 50% 50%, #001A42 0%, rgba(1, 10, 24, 0.00) 100%)",
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onClick={() => router.push(`/blog/${slug}`)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 rounded-xl transition duration-300 group-hover:opacity-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${cursorX}px ${cursorY}px,
              #346BFA 0%,
              rgba(0, 0, 0, 0),
              transparent 70%
            )
          `,
        }}
      />
      <CardHeader className="pt-4 px-4 pb-8 gap-2">
        <Image
          src={thumbnail}
          alt={thumbnail}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[240px] w-full object-cover rounded-xl"
        />
        <CardTitle className="font-medium text-base bg-title bg-clip-text text-transparent">
          {category?.name}
        </CardTitle>
        <CardDescription className="font-bold text-base leading-[18px] bg-title bg-clip-text text-transparent">
          {title}
        </CardDescription>
        <CardDescription className="text-base font-normal text-[#98A1B6] line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="text-base bg-blue-gradient text-transparent bg-clip-text font-bold flex items-center transition-all hover:-translate-y-1">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.21967 17.0303C8.92678 16.7374 8.92678 16.2626 9.21967 15.9697L13.1893 12L9.21967 8.03033C8.92678 7.73744 8.92678 7.26256 9.21967 6.96967C9.51256 6.67678 9.98744 6.67678 10.2803 6.96967L14.7803 11.4697C15.0732 11.7626 15.0732 12.2374 14.7803 12.5303L10.2803 17.0303C9.98744 17.3232 9.51256 17.3232 9.21967 17.0303Z"
              fill="url(#paint0_linear_663_6266)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_663_6266"
                x1="12"
                y1="6.75"
                x2="12"
                y2="17.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#396FFD" />
                <stop offset="1" stopColor="#0744E6" />
              </linearGradient>
            </defs>
          </svg>
        </p>
      </CardFooter>
    </CustomCard>
  );
};

export default CardBlog;
