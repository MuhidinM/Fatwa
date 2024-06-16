"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "../ui/button";
import { Apple, Play } from "lucide-react";

export function HeroScroll() {
  const handleClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.seid.fetawa_&hl=en&gl=US&pli=1",
      "_blank"
    ); // Replace with your desired URL
  };

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
              <Button variant="outline" onClick={handleClick}>
                <svg
                  className="h-6 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0,0h40v40H0V0z"></path>
                  <g>
                    <path
                      d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                      fill="#34A853"
                    ></path>
                  </g>
                </svg>
                Play store
              </Button>
              <Button variant="outline">
                <svg
                  className="h-6 mr-2"
                  viewBox="0 0 17 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
                    fill="currentColor"
                  />
                </svg>
                App Store
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
