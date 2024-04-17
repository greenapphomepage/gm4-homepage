import { Metadata } from "next";

export default function DetailBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lg:px-[80px] px-4 xl:px-24 pb-11">{children}</div>;
}
