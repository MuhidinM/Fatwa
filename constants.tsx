import {
  Bolt,
  Facebook,
  FileQuestion,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Layers3,
  LayoutDashboard,
  Twitter,
  User,
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
    name: "questions",
    label: "Questions",
    icon: <FileQuestion />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard/questions",
  },
  {
    name: "users",
    label: "Users",
    icon: <User />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard/users",
  },
  {
    name: "ustazs",
    label: "Ustazs",
    icon: <GraduationCap />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard/ustazs",
  },
  {
    name: "categories",
    label: "Categories",
    icon: <Layers3 />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard/categories",
  },
  {
    name: "config",
    label: "Config",
    icon: <Bolt />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard/config",
  },
];

export const links: FooterItem[] = [
  { name: "Facebook", ref: "/", icon: <Facebook /> },
  { name: "Instagram", ref: "/", icon: <Instagram /> },
  { name: "Twitter", ref: "/", icon: <Twitter /> },
  { name: "GitHub", ref: "/", icon: <Github /> },
  { name: "Site", ref: "/", icon: <Globe /> },
];
