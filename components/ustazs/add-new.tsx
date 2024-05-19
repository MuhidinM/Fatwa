"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { push, ref, set } from "firebase/database";
import { db } from "@/app/firebase-config";

const formSchema = z.object({
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
});

const AddUstaz = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      // Add new category and capture the reference
      const categoriesRef = ref(db, "categories");
      const newCategoryRef = push(categoriesRef, {
        name: data.category,
      });

      // Get the generated key (UUID) from the reference
      const uuid = newCategoryRef.key;

      // Update the category with the generated UUID directly under the category key
      if (uuid) {
        const categoryData = {
          uuid: uuid,
          name: data.category,
        };
        set(ref(db, `categories/${uuid}`), categoryData);
      }

      form.reset();
    } catch (error) {
      console.error("Error updating database:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Muhammad Ahmed" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone No</FormLabel>
              <FormControl>
                <Input type="number" placeholder="00251912345678" {...field} />
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

export default AddUstaz;
