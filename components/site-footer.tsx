"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CustomDivider from "@/components/custom-divider";
import CopyrightBanner from "./copyright-banner";
import LocationSVG from "@/public/icons/location.svg";
import CallSVG from "@/public/icons/call-incoming.svg";
import SmsSVG from "@/public/icons/sms.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SiteFooter = () => {
  const router = useRouter();
  return (
    <section>
      <div className="relative h-[400px] w-full lg:px-[80px] px-4 xl:px-24">
        <Image
          src="/images/bg-footer.svg"
          alt=""
          fill
          className="z-0 object-cover"
        />
        <CustomDivider className="relative mb-[70px]" />

        <div className="relative w-full flex max-md:flex-col max-md:gap-10">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-11 w-11">
                <AvatarImage src="/images/logo_new_header.png" alt="Logo" />
                <AvatarFallback>GM4</AvatarFallback>
              </Avatar>
              <span className="text-[22px] leading-[120%] font-bold">
                GM4 Company
              </span>
            </div>
            <p className="mb-2">린스타트업 전문 아웃소싱 개발회사</p>
            <Button
              onClick={() => router.push("/estimate-pricing")}
              className="w-fit py-2 hover:shadow-secondary group"
            >
              <span>개발자 채용 의뢰</span>
              <span className="w-0 group-hover:w-6 transition-all duration-300 origin-left">
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </span>
            </Button>
          </div>
          <div className="flex flex-1 flex-col gap-4 text-[14px] text-span font-medium">
            <p className="mb-2 font-bold text-[#E8E7EE]">회사정보</p>
            <p>회사명: 지엠포컴퍼니 주식회사 | 대표 이승우</p>
            <p>사업자등록번호: 491-87-02258</p>
            <div className="flex gap-2 items-center hover:text-[#1A55EF] group">
              <LocationSVG className="group-hover:[&_path]:stroke-[#1A55EF]" />
              <a
                href="https://maps.app.goo.gl/Jn4T6LfY7ZJtPbpB8"
                target="_blank"
                className="group-hover:underline"
              >
                서울특별시 강남구 선릉로 664 건설빌딩 205-1호
              </a>
            </div>
            <div className="flex gap-2 items-center hover:text-[#1A55EF] group">
              <CallSVG className="group-hover:[&_path]:stroke-[#1A55EF]" />
              <a className="group-hover:underline" href="tel:050356925001">
                0503-5692-5001
              </a>
            </div>
            <div className="flex gap-2 items-center hover:text-[#1A55EF] group">
              <SmsSVG className="group-hover:[&_path]:stroke-[#1A55EF]" />
              <a
                href="mailto:gm4-korea@greenapps.kr"
                className="group-hover:underline"
              >
                gm4-korea@greenapps.kr
              </a>
            </div>
          </div>
          <div className="flex flex-1 gap-20 lg:gap-0 lg:justify-between">
            <div className="flex flex-col gap-4 text-[14px] text-span font-medium">
              <p className="mb-2 font-bold text-[#E8E7EE]">메뉴</p>
              <Link href="/">홈</Link>
              <Link href="/about">회사소개</Link>
              <Link href="/portfolio">포트폴리오</Link>
              <Link href="/estimate-pricing">견적계산</Link>
              <Link href="/contact-us">문의</Link>
            </div>
            <div className="flex flex-col gap-4 text-[14px] text-span font-medium">
              <p className="mb-2 font-bold text-[#E8E7EE]">서비스 정책</p>
              <a href="https://docs.greenapps.kr">이용약관</a>
              <a href="https://docs.greenapps.kr/undefined-1">
                개인정보보호정책
              </a>
            </div>
          </div>
        </div>

        <CustomDivider className="relative sm:mt-20 mt-4" />
        <CopyrightBanner />
      </div>
    </section>
  );
};

export default SiteFooter;
