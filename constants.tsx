import {
  Facebook,
  Github,
  Globe,
  Instagram,
  LayoutDashboard,
  Twitter,
} from "lucide-react";
import { FooterItem, Payment, SideBarItem } from "./types/types";

export const sideBar: SideBarItem[] = [
  //maximum of 8 menus items for it to be beautiful
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard",
  },
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboards",
  },
];

export const links: FooterItem[] = [
  { name: "Facebook", ref: "/", icon: <Facebook /> },
  { name: "Instagram", ref: "/", icon: <Instagram /> },
  { name: "Twitter", ref: "/", icon: <Twitter /> },
  { name: "GitHub", ref: "/", icon: <Github /> },
  { name: "Site", ref: "/", icon: <Globe /> },
];

export const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];
