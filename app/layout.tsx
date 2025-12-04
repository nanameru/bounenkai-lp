import type { Metadata } from "next";
import { Noto_Sans_JP, Potta_One } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// ポップで力強いフォントを追加（忘年会の賑やかさ用）
const pottaOne = Potta_One({
  variable: "--font-potta-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Japan AI 大忘年会 2025",
  description: "2025年12月13日(土)開催！今年のAI界隈を振り返り、みんなで労い合う大忘年会！参加費無料。",
  metadataBase: new URL("https://bounenkai-lp.vercel.app"), // 本番URLに変更してください
  openGraph: {
    title: "Japan AI 大忘年会 2025",
    description: "2025年12月13日(土)開催！今年のAI界隈を振り返り、みんなで労い合う大忘年会！参加費無料。",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Japan AI 大忘年会 2025",
      },
    ],
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan AI 大忘年会 2025",
    description: "2025年12月13日(土)開催！今年のAI界隈を振り返り、みんなで労い合う大忘年会！参加費無料。",
    images: ["/1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${pottaOne.variable} antialiased bg-[#1a0b2e] text-white selection:bg-yellow-400 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
