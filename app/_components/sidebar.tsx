"use client";

import { LayoutGrid, Package, ShoppingBasket } from "lucide-react";
import SidebarButton from "./ui/sidebar-button";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-full h-full bg-white border-r flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4 sm:px-8 sm:py-6">
        <Link href='/'>
          <h1 className="text-xl font-extrabold sm:text-2xl">URIANA</h1>
        </Link>
      </div>
      {/* Botões */}
      <div className="flex flex-col gap-2 p-2 flex-1">
        <SidebarButton href="/">
          <LayoutGrid size={20} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <Package size={20} />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasket size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default SideBar;
