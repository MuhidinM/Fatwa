import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HeroScroll } from "@/components/home/preview";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:px-48 bg-black">
      {/* <h1>Landing Page</h1> <Link href={"/auth"}>LogIn</Link> */}
      <Hero />
      <Features />
      <HeroScroll />
    </div>
  );
}
