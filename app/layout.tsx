import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./_components/sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Uriana",
  description: "Gerenciador de estoque e vendas",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full gap-8">
          <SideBar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
