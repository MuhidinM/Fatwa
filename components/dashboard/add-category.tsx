"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { push, ref } from "firebase/database";
import { db } from "@/app/firebase-config";

const formSchema = z.object({
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
});

const AddCategory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      // Add new category
      const categoriesRef = ref(db, "categories");
      push(categoriesRef, {
        name: data.category,
      });
      form.reset();
      // Additional logic if needed
      // console.log("Data submitted:", data);
    } catch (error) {
      console.error("Error updating database:", error);
    }

    // console.log(data.category);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Add Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};

export default AddCategory;
