"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "@/app/firebase-config";
import { Category } from "@/types/types";

export function DialogFull({ question }: { question: any }) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Define the reference to the 'questions' node in your Firebase database
    const categoriesRef = ref(db, "categories");

    // Set up the event listener for changes in the 'questions' node
    onValue(
      categoriesRef,
      (snapshot) => {
        const data = snapshot.val();

        // Check if there is data and update the state
        if (data) {
          const questionsArray: Category[] = Object.values(data);
          setCategories(questionsArray);
        }
      },
      {
        // Optionally, you can handle errors here
        onlyOnce: false, // Set this to true if you only want to fetch data once
      }
    );
  }, []);

  // console.log(categories);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Question</DialogTitle>
        </DialogHeader>
        {question}
        <div className="flex justify-between items-center mt-8">
          <div className="font-semibold">Category</div>
          <Select>
            <SelectTrigger className="w-[270px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.uuid} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
              {/* <SelectItem value="light">Light</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button type="submit">Accept</Button>
          <Button variant={"destructive"} type="submit">
            Decline
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
