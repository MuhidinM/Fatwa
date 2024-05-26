"use client";

import { useEffect, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { get, ref, set } from "firebase/database"; // Import get function to fetch data
import { db } from "@/app/firebase-config"; // Ensure this is the correct path to your firebase-config

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  showAd: z.boolean(),
  showFullScreenAd: z.boolean(),
  showSponsor: z.boolean(),
  uploadQuestion: z.boolean(),
  version: z.string().min(2, {
    message: "version must be at least 2 characters.",
  }),
});

const Config = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      showAd: true,
      showFullScreenAd: true,
      showSponsor: true,
      uploadQuestion: true,
      version: "",
    },
  });

  // Fetch data from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const configRef = ref(db, "config");
        const snapshot = await get(configRef);

        if (snapshot.exists()) {
          form.reset(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const configRef = ref(db, "config");
        await set(configRef, values);
        form.reset(values);
        toast({
          title: "Config successfully updated",
        });
        console.log("config successfully updated");
      } catch (error) {
        toast({
          title: "Error updating config",
        });
        console.error("Error updating config:", error);
      }
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="showAd"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Show Ad</FormLabel>
                  <FormDescription>sample description</FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    disabled={isPending}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="showFullScreenAd"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Show Full Screen Ad
                  </FormLabel>
                  <FormDescription>sample description</FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    disabled={isPending}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="showSponsor"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Show Sponsor</FormLabel>
                  <FormDescription>sample description</FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    disabled={isPending}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uploadQuestion"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Upload Question</FormLabel>
                  <FormDescription>sample description</FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    disabled={isPending}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Version</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} disabled={isPending} />
                </FormControl>
                <FormDescription>sample description</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Config;
