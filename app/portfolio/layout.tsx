import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "지엠포컴퍼니 현대 비즈니스를 위한 혁신적이고 효율적인 제품을 개발하여 다양한 산업 분야에서 고객의 성공을 이끌어내고 있습니다." +
    "스마트 소프트웨어 솔루션:\n" +
    "우리는 사용자 경험을 개선하고 업무 프로세스를 최적화하는 스마트 소프트웨어 솔루션을 제공합니다. 클라우드 네이티브 애플리케이션과 인공 지능 기술을 결합하여 비즈니스의 생산성을 향상시킵니다." +
    "빅데이터 및 분석 도구:\n" +
    "데이터의 힘을 활용하여 기업들이 중요한 의사결정을 내릴 수 있도록 돕는 빅데이터 및 분석 도구를 개발했습니다. 고급 분석과 시각화를 통해 비즈니스 인텔리전스를 향상시키며 신속한 의사결정을 지원합니다." +
    "사물인터넷(IoT) 기술:\n" +
    "GM4는 현대적인 생태계에서 사물인터넷 기술을 통합하여 지능적이고 연결된 비즈니스 환경을 만들어냅니다. IoT 솔루션은 생산성 향상과 유지보수 비용 절감을 실현합니다." +
    "기술 컨설팅 및 지원:\n" +
    "우리는 고객의 고유한 요구에 부응하기 위해 철저한 기술 컨설팅 서비스를 제공하며, 제품 도입 및 유지보수 단계에서 지속적인 지원을 제공합니다." +
    "GM4의 제품은 현대 비즈니스 도전에 대한 포괄적이고 혁신적인 솔루션을 제공합니다. 우리의 제품으로 인해 고객들은 급변하는 시장에서 선도적인 역할을 할 수 있습니다.",
  alternates: {
    canonical: `/portfolio`,
  },
};
export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lg:px-[80px] px-4 xl:px-24">{children}</div>;
}
