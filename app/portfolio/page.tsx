"use client";
import CardPortfolio from "@/components/card-portfolio/card-portfolio";
import DialogCustom from "@/components/dialog-custom";
import { useState } from "react";
import usePortfolio from "@/lib/use-portfolio";

const containerStyle = {
  background:
    "radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
};

const Portfolio = () => {
  const [data, setData] = useState<PortfolioType>();
  const [open, setOpen] = useState(false);
  const { portfolios, loading, error } = usePortfolio();
  return (
    <div className="w-full">
      <div
        className="text-center lg:leading-[50px] p-[30px] leading-[30px]"
        style={containerStyle}
      >
        <h1 className="lg:text-[70px] text-[32px] font-bold lg:leading-[80px] leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Portfolio
        </h1>
        <p className="text-[14px] lg:text-[18px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          We reveal representative success stories.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4 mb-[3rem]">
        {portfolios &&
          portfolios.data.map((portfolio, index) => (
            <CardPortfolio
              data={portfolio}
              key={index}
              onClick={() => {
                setData(portfolio);
                setOpen(true);
              }}
            />
          ))}
      </div>
      <DialogCustom
        data={data}
        onClose={() => {
          setData(undefined);
          setOpen(false);
        }}
        isOpen={open}
      />
    </div>
  );
};

export default Portfolio;
