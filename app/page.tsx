import { ContactUs } from "@/components/home/contactus";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import { HeroScroll } from "@/components/home/preview";

export default function Home() {
  return (
    <div className="lg:px-48 bg-black pb-20">
      <Navbar />
      <Hero />
      <Features />
      <HeroScroll />
      <ContactUs />
    </div>
  );
}
