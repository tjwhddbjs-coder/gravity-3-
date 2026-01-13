import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "6학년 홈페이지 | 우리반 공간",
    description: "즐거운 6학년 우리반의 미션과 학습 도구를 모아둔 홈페이지입니다.",
    openGraph: {
        title: "6학년 홈페이지",
        description: "우리반 사진과 미션을 확인하세요.",
        type: "website",
    },
    icons: {
        icon: "https://fav.farm/🏫", // Dynamic emoji favicon
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
        </html>
    );
}
