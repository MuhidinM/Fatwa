"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/components/user";
import { sideBar } from "@/constants";
import { cn } from "@/lib/utils";
import { LogOut, Settings, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MiniSidebar = ({
  click,
  menu,
  small,
}: {
  click: any;
  menu: any;
  small: any;
}) => {
  const path = usePathname();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 z-50 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Card className="w-[350px]">
          <CardHeader className="flex flex-row items-center justify-between space-x-5 w-full">
            <CardTitle>Menu</CardTitle>
            <Button variant={"outline"} onClick={menu}>
              <span className="sr-only">Close menu</span>
              <X />
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 font-semibold w-full">
              {sideBar.map(
                (item) =>
                  !item.hide && ( // Render the list item only if item.hidden is false
                    <li key={item.name} className="">
                      <Link
                        href={item.path}
                        className={cn(
                          "flex items-center p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300 group",
                          small && "justify-center ",
                          item.path === path &&
                            "text-blue-400 hover:text-blue-600 dark:text-blue-400 hover:dark:text-blue-500"
                        )}
                      >
                        {item.icon}
                        <span className={cn("ms-3", small && "hidden")}>
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
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
                "flex w-full",
                small
                  ? "justify-center"
                  : "justify-between border border-gray-500 p-2 rounded-lg items-center"
              )}
            >
              <div className="flex">
                <User />
              </div>
              <div className={cn("flex flex-col", small && "hidden")}>
                <p>Name Name</p>
                <span className="text-xs text-gray-400">mail@email.com</span>
              </div>
              <div className={cn("flex flex-col", small && "hidden")}></div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
