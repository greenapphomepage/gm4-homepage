"use client";
import React, { useCallback, useState } from "react";
import MainNav from "@/components/main-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomDivider from "@/components/custom-divider";
import { useRouter } from "next/navigation";
import Menu from "./menu";

const SiteHeader = () => {
  const router = useRouter();
  const handleNavigate = () => router.push("/");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => {
    setIsOpen((x) => !x);
  }, []);
  const setTrue = useCallback(() => {
    setIsOpen(true);
  }, []);

  const setFalse = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md">
      <div className="flex items-center justify-between w-full pt-2 lg:px-[80px] px-4 xl:px-24">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleNavigate}
        >
          <Avatar className="h-11 w-11">
            <AvatarImage src="/images/logo_new_header.png" alt="Logo" />
            <AvatarFallback>GM4</AvatarFallback>
          </Avatar>
          <span className="text-[22px] leading-[120%] font-bold">
            GM4 Company
          </span>
        </div>
        <MainNav />
        <Menu
          isOpen={isOpen}
          toggle={toggle}
          setFalse={setFalse}
          setTrue={setTrue}
        />
      </div>
      <CustomDivider />
    </div>
  );
};

export default SiteHeader;
