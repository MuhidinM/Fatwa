"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "../ui/button";
import { Apple, Play } from "lucide-react";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Download
              </span>
              <br />
              our mobile app
            </h1>
            <div className="space-x-4 mt-4">
              <Button variant="outline">
                <Play />
                Play Store
              </Button>
              <Button variant="outline">
                <Apple />
                Apple
              </Button>
            </div>
          </>
        }
      >
        <Image
          src={`/preview.jpg`}
          alt="hero"
          height={2340}
          width={1080}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
