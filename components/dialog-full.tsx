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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ref, onValue } from "firebase/database";
import { db } from "@/app/firebase-config";
import { Category } from "@/types/types";

const FormSchema = z.object({
  category: z.string({
    required_error: "Please select a category.",
  }),
});

export function DialogFull({ question }: { question: any }) {
  const [categories, setCategories] = useState<Category[]>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Question</DialogTitle>
            </DialogHeader>
            {question}
            <div className="flex justify-between items-center mt-8">
              <div className="font-semibold">Category</div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem>
                      <FormControl>
                        <SelectTrigger className="w-[270px]">
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.uuid} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </FormItem>
                  </Select>
                )}
              />
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit">Accept</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
