import type { Metadata } from "next";
import "./globals.css";
import HeaderPage from "./components/Header/Header";
import FooterPage from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "PortfolioPR",
  description: "みんなでポートフォリオを載せてどれくらいのレベルのポートフォリオで内定をもらったのかを知ることでモチベーションが保つのでは？という発想で作成したポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="pt-[30px] px-[60px]">
          <HeaderPage />
          {children}
        </div>
        <FooterPage />
      </body>
    </html>
  );
}
