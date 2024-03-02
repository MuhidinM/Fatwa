"use client";
import { Button } from "@/components/ui/button";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { User } from "@/components/user";
import { sideBar } from "@/constants";
import { cn } from "@/lib/utils";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MiniSidebar = () => {
  const path = usePathname();
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Menu</DialogTitle>
        {/* <DialogDescription>some thing</DialogDescription> */}
      </DialogHeader>
      <ul className="space-y-2 font-semibold w-full">
        {sideBar.map(
          (item) =>
            !item.hide && ( // Render the list item only if item.hidden is false
              <li key={item.name} className="">
                <Link
                  href={item.path}
                  className={cn(
                    "flex items-center p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300 group",

                    item.path === path &&
                      "text-blue-400 hover:text-blue-600 dark:text-blue-400 hover:dark:text-blue-500"
                  )}
                >
                  {item.icon}
                  <span className={cn("ms-3")}>{item.label}</span>
                </Link>
              </li>
            )
        )}
      </ul>
      <div className="flex justify-between space-x-5 w-full">
        <Button variant="outline" className="w-full">
          <Settings />
          Settings
        </Button>
        <Button variant={"destructive"} className="w-full">
          <LogOut />
          LogOut
        </Button>
      </div>
      <div
        className={cn(
          "flex w-full justify-between border border-gray-500 p-2 rounded-lg items-center"
        )}
      >
        <div className="flex">
          <User />
        </div>
        <div className={cn("flex flex-col")}>
          <p>Name Name</p>
          <span className="text-xs text-gray-400">mail@email.com</span>
        </div>
        <div className={cn("flex flex-col")}></div>
      </div>
    </DialogContent>
  );
};
