import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
export const User = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/muhidinm.png" />
      <AvatarFallback>MM</AvatarFallback>
    </Avatar>
  );
};
