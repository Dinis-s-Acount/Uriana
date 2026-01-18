import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "./_components/ui/sonner";
import MobileSidebar from "./_components/mobile-sidebar";

export const metadata: Metadata = {
  title: "Uriana",
};

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row">
          <div className="hidden h-full w-64 flex-shrink-0 md:block">
            <Sidebar />
          </div>

          <div className="flex items-center justify-between border-b bg-white p-3 md:hidden">
            <MobileSidebar />
            <span className="text-lg font-bold sm:text-xl">URIANA</span>
            <div className="w-10"></div>
          </div>

          <div className="flex-1 overflow-auto bg-gray-50">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}

