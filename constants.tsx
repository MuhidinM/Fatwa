import {
  Facebook,
  Github,
  Globe,
  Instagram,
  LayoutDashboard,
  Twitter,
} from "lucide-react";
import { FooterItem, SideBarItem } from "./types/types";

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
