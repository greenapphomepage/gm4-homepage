import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import SiteFooter from "@/components/site-footer";
import CopyrightBanner from "@/components/copyright-banner";
import { getFrontEndUrl } from "@/lib/getBaseUrl";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
const GA_CONVERSION_LABEL = process.env.NEXT_PUBLIC_CONVERSION_LABEL;

export const metadata: Metadata = {
  metadataBase: new URL(getFrontEndUrl()),
  title:
    "지엠포컴퍼니 | 스타트업 맞춤형 앱개발,웹개발,개발자 아웃소싱, IT 전문 인력 제공",
  description:
    "해외 개발자 채용 플랫폼인 지엠포컴퍼니 엄격한 검증 절차를 통과한 전세계 상위10% 개발자를 1주안에 채용합니다. 개발자 모집부터 검증 및 채용까지 개발자 채용에 필요한 모든 서비스를 원스톱 형태로 기업이 원하는 개발자를 채용가능합니다. 앱개발,웹개발,소프트웨어개발,앱제작,웹제작,개발자채용,개발자프리렌서",
  icons: {
    icon: "/images/logo_new_header.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ko-KO": "/ko-KO",
      "vi-VI": "/vi-VI",
    },
  },
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "개발자 파견 서비스",
    "IT 인프라 아웃소싱",
    "프리랜서 개발자 매칭",
    "모바일 앱 개발 아웃소싱",
    "백엔드 개발자 아웃소싱",
    "프론트엔드 개발자 아웃소싱",
    "풀스택 개발자 아웃소싱",
    "스타트업 IT 솔루션",
    "맞춤형 소프트웨어 개발",
    "IT 아웃소싱 컨설팅",
    "하이브리드 앱 개발 아웃소싱",
    "UI/UX 개발자 아웃소싱",
    "AI 개발자 아웃소싱",
    "머신러닝 개발자 아웃소싱",
    "데이터 분석 아웃소싱",
    "IT 기술 지원 아웃소싱",
    "블록체인 개발 아웃소싱",
    "웹사이트 개발 아웃소싱",
    "e커머스 개발자 아웃소싱",
    "게임 개발자 아웃소싱",
    "IoT 개발자 아웃소싱",
    "IT 아웃소싱 서비스",
    "IT 인력 아웃소싱",
    "클라우드 솔루션 제공",
    "스타트업 맞춤형 IT 인력",
    "빅데이터 개발자 아웃소싱",
    "스마트폰 앱 개발 아웃소싱",
    "ERP 개발자 아웃소싱",
    "SaaS 개발자 아웃소싱",
    "기술 파트너십 제공",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [
      { url: "/images/avatar.png" },
      { url: "https://d1gey57zr11abr.cloudfront.net/avatar.png" },
      { url: "/images/logo_new_header.png" },
    ],
    emails: ["gm4-korea@greenapps.kr"],
  },
  verification: {
    google: "02_hAUYVHZ-qJTu_eeASXfV2iaGwJboSXqO2bS74MBM",
    other: {
      "naver-site-verification": "09b7054d7a3c644c373a67ef955201bf54dd5594",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
      </Script>

      <Script id="gtag-event" strategy="afterInteractive">
        {`
        gtag('event', 'conversion', {'send_to': '${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}'});
          `}
      </Script>
      <Script id="gtag-event-init" strategy="afterInteractive">
        {`
        function gtag_report_conversion(url) {
        var callback = function () {
        if (typeof(url) != 'undefined') {
        window.location = url;
        }
        };
       gtag('event', 'conversion', {
      'send_to': '${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}',
      'event_callback': callback
       });
       return false;
       }
          `}
      </Script>

      <body
        className={cn("min-h-screen bg-background font-sans", inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative max-w-[1440px] mx-auto flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 lg:pt-12">{children}</div>
            <SiteFooter />
            {/* <CopyrightBanner /> */}
            <TailwindIndicator />
          </div>
        </ThemeProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "bg-toast opacity-40 text-opacity-100 font-bold gap-2 p-3 rounded-full flex items-center justify-between",
              error: "text-red-400",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </body>
    </html>
  );
}
