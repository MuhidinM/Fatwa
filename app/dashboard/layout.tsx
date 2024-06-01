"use client";
import { MiniSidebar } from "@/components/dashboard/mobile-sidebar";
import { Navbar } from "@/components/dashboard/sidebar";
import { useAuth } from "@/contexts/authContext";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [small, setSmall] = useState(false);
  const { userLoggedIn, setUserLoggedIn } = useAuth(); // Ensure setUserLoggedIn is available from context
  const router = useRouter();
  const changeSize = () => {
    setSmall(!small);
  };
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/auth");
    }
  }, [userLoggedIn, router]);
  console.log(userLoggedIn);
  return (
    <div className="">
      {userLoggedIn && (
        <>
          <Navbar click={changeSize} small={small} />
          <div className={cn("p-4 md:ml-64", small && "md:ml-20")}>
            {/* <Breadcrumbs /> */}
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeLayout;
