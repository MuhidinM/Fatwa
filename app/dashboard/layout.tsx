"use client";
import { MiniSidebar } from "@/components/dashboard/mobile-sidebar";
import { Navbar } from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [small, setSmall] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const changeSize = () => {
    setSmall(!small);
  };
  const changeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="">
      <Navbar click={changeSize} menu={changeMenu} small={small} />
      <div className={cn("p-4 md:ml-64", small && "md:ml-20")}>
        {/* <Breadcrumbs /> */}
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
      {/* Full-screen menu */}
      {menuOpen && (
        <MiniSidebar click={changeSize} menu={changeMenu} small={small} />
      )}
    </div>
  );
};

export default HomeLayout;
