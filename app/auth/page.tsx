"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/contexts/authContext";
import { doSignInWithEmailAndPassword } from "../auth";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(2, { message: "Email is required" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Page = () => {
  const { userLoggedIn, setUserLoggedIn } = useAuth(); // Ensure setUserLoggedIn is available from context
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null); // State to hold any errors
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (userLoggedIn) {
      router.push("/dashboard");
    }
  }, [userLoggedIn, router]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(values.email, values.password);
        setUserLoggedIn(true); // Update userLoggedIn state on successful sign-in
        router.push("/dashboard"); // Navigate to dashboard after successful sign-in
      } catch (err) {
        setError(err.message); // Capture and set the error message
        console.error("Error during sign-in:", err);
      } finally {
        setIsSigningIn(false);
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <div className="">Log In</div>
              <div className="">
                <ModeToggle />
              </div>
            </div>
          </CardTitle>
          <CardDescription>LogIn to Fetawa administrator.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="test@email.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSigningIn}>
                Log In
              </Button>
            </form>
          </Form>
          {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
          {/* Display error message */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
