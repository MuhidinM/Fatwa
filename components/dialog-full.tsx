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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState, useTransition } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ref, onValue, push, update } from "firebase/database";
import { db } from "@/app/firebase-config";
import { Category, Teacher } from "@/types/types";
import { useToast } from "./ui/use-toast";
import DeleteAlert from "./ui/delete-alert";

const FormSchema = z.object({
  ustaz: z.string({
    required_error: "Please select a ustaz.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
});

export function DialogFull({
  question,
  uuid,
}: {
  question: string;
  uuid: string;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [ustazs, setUstazs] = useState<Teacher[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const selectedCategory = data.category;
    const selectedUstaz = ustazs.find((ustaz) => ustaz.uuid === data.ustaz);

    if (!selectedUstaz) {
      toast({
        title: "Error",
        description: "Selected ustaz not found.",
      });
      return;
    }

    startTransition(() => {
      try {
        // Update the 'status', 'category', and 'answeredBy' for the specific question
        const updates: { [key: string]: any } = {};
        updates[`/questions/${uuid}/status`] = 1;
        updates[`/questions/${uuid}/category`] = selectedCategory;
        updates[`/questions/${uuid}/answeredBy/uuid`] = selectedUstaz.uuid;
        updates[`/questions/${uuid}/answeredBy/name`] = selectedUstaz.name;

        update(ref(db), updates);

        form.reset();
        toast({
          title: "Updated Successfully.",
        });
      } catch (error) {
        form.reset();
        toast({
          title: "Error updating.",
        });
        console.error("Error updating database:", error);
      }
    });
  }

  useEffect(() => {
    startTransition(() => {
      // Define references to 'categories' and 'ustazs' nodes in your Firebase database
      const categoriesRef = ref(db, "categories");
      const ustazsRef = ref(db, "ustazs");

      // Set up the event listener for changes in the 'categories' node
      onValue(
        categoriesRef,
        (snapshot) => {
          const data = snapshot.val();

          // Check if there is data and update the state for categories
          if (data) {
            const categoriesArray: Category[] = Object.values(data);
            setCategories(categoriesArray);
          }
        },
        {
          onlyOnce: false,
        }
      );

      // Set up the event listener for changes in the 'ustazs' node
      onValue(
        ustazsRef,
        (snapshot) => {
          const data = snapshot.val();

          // Check if there is data and update the state for ustazs
          if (data) {
            const ustazsArray: Teacher[] = Object.values(data);
            setUstazs(ustazsArray);
          }
        },
        {
          onlyOnce: false,
        }
      );
    });
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Question</DialogTitle>
            </DialogHeader>
            {question}
            <div className="flex justify-between items-center mt-8">
              <div className="font-semibold">Ustaz</div>
              <FormField
                control={form.control}
                name="ustaz"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    disabled={isPending}
                    defaultValue={field.value}
                  >
                    <FormItem>
                      <FormControl>
                        <SelectTrigger className="w-[370px]">
                          <SelectValue placeholder="Select a Ustaz" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ustazs.map((ustaz) => (
                          <SelectItem key={ustaz.uuid} value={ustaz.uuid}>
                            {ustaz.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                      <FormMessage />
                    </FormItem>
                  </Select>
                )}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="font-semibold">Category</div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    disabled={isPending}
                    defaultValue={field.value}
                  >
                    <FormItem>
                      <FormControl>
                        <SelectTrigger className="w-[370px]">
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
                      <FormMessage />
                    </FormItem>
                  </Select>
                )}
              />
            </div>
            <DialogFooter className="mt-4">
              <DeleteAlert uuid={uuid} type="questions" />
              <Button type="submit" disabled={isPending}>
                Accept
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
