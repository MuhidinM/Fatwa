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
import { push, ref, set } from "firebase/database";
import { db } from "@/app/firebase-config";
import { useTransition } from "react";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
});

const AddCategory = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    startTransition(() => {
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
        toast({
          title: "Created a category Successfully",
          description: "Category Title: " + data.category,
        });
      } catch (error) {
        form.reset();
        toast({
          title: "Could not create category",
          description: "Category Title: " + data.category,
        });
      }
    });
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
                <Input
                  placeholder="Add Category"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Add
        </Button>
      </form>
    </Form>
  );
};

export default AddCategory;
