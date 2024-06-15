"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-black text-white w-full gap-4 mx-auto px-8">
        <Card>
          <h1 className="font-semibold text-4xl">About Us</h1>
          <p>this is us</p>
        </Card>
        <Card>
          <h1 className="font-semibold text-4xl">Contact Us</h1>
          <div className="space-y-8 w-full ">
            <div className="grid items-center gap-1.5">
              <Label>Name</Label>
              <Input id="name" placeholder="Name" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Message</Label>
              <Textarea placeholder="Type your message here." />{" "}
            </div>
            <Button variant="outline">Submit</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-xl w-full mx-auto relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <div className="w-full h-full flex flex-col items-center justify-center mx-8">
        {children}
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
