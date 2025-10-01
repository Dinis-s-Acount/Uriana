import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";

export const metadata: Metadata = {
  title: "Uriana",
  description: "Sistema de gerênciamento de vendas",
};

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${mulish.className} antialiased`}
      >
        <div className="flex h-full gap-8">
          {/* <SideBar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
