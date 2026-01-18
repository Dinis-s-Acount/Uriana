"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import SideBar from "./sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu size={24} className="sm:size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0 sm:w-[300px]">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
