import { ReactElement } from "react";

export interface SideBarItem {
  name: string;
  label: string;
  icon: ReactElement;
  hide: boolean; // set the hidden value to true if you want to. U can use different var for different purposes.
  path: string;
}

export interface FooterItem {
  name: string;
  ref: string;
  icon: ReactElement;
}

export interface Category {
  name: string;
  uuid: string;
}

export interface Teacher {
  name: string;
  uuid: string;
}

export interface User {
  email: string;
  photo: string;
  name: string;
  uuid: string;
}

export interface Question {
  uuid: string;
  answer: string;
  answeredBy: Teacher;
  answeredDate: number;
  askedBy: User;
  askedDate: number;
  category: Category;
  question: string;
  references: string[];
  status: number;
}
