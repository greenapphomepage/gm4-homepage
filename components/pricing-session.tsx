"use client";
import React, { useRef } from "react";
import CardPricing from "@/components/card-pricing";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView, motion } from "framer-motion";
import { DataPricing } from "@/data/pricing";

type PricingSessionProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const PricingSession = ({ className }: PricingSessionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  return (
    <section
      ref={ref}
      className={cn(
        "relative mt-20 2xl:mt-[120px] flex flex-col items-center gap-4 overflow-hidden",
        isInView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !isInView && "before:rotate-180 before:opacity-40",
        className,
      )}
    >
      <div className="absolute top-0 bg-divider w-full h-px"></div>
      <div
        className="absolute top-0 -translate-y-[40%] max-md:-translate-y-[5%] w-[70%] max-md:w-[120%] aspect-[2/1] opacity-30 transition-all duration-1000 scale-x-0 [.is-visible_&]:scale-x-100"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, #346BFA 0%, rgba(0, 0, 0, 0.00) 70%)",
        }}
      ></div>

      <div className="lg:mt-20 mt-[52px] text-center bg-[#0b1421] max-w-fit py-1 px-4 rounded-full font-medium border border-[#151d2a] opacity-0 [.is-visible_&]:opacity-100">
        PRICING
      </div>
      <p className="font-bold text-center xl:text-[70px] xl:leading-[80px] lg:text-[52px] lg:leading-[60px] text-[32px] leading-[40px] bg-title text-transparent bg-clip-text opacity-0 mb-20 translate-y-[50%] [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 [.is-visible_&]:opacity-100">
        플랫폼 운영에 필요한 개발자를 찾고 있으신가요?
      </p>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
        className="grid gap-8 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 pb-[150px] h-full"
      >
        {DataPricing.map((price, index) => (
          <CardPricing key={index} {...price} />
        ))}
      </motion.div>
      <div className="absolute -z-10 w-full h-[600px] bottom-0 translate-y-1/2">
        <Image src="/images/bg_galaxy.svg" alt="Galaxy" fill />
      </div>
    </section>
  );
};

export default PricingSession;
