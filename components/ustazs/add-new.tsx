"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { ref, set } from "firebase/database";
import { db } from "@/app/firebase-config";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  phone: z.string().min(10, {
    message: "phone number must be at least 10 characters.",
  }),
});

const AddUstaz = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      // Use phone number as the ID
      const ustazRef = ref(db, `ustazs/${data.phone}`);

      // Set the data
      set(ustazRef, {
        name: data.name,
        phone: data.phone,
        status: 0,
        image: "",
        lastSeen: "",
        token: "",
        uuid: data.phone,
      });

      form.reset();
    } catch (error) {
      console.error("Error updating database:", error);
    }
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Ustaz</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sheik Muhammad Ahmed" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone No</FormLabel>
                    <FormControl>
                      <Input placeholder="+251912345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Add</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddUstaz;
