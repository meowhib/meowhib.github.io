"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addSubscriber } from "@/actions";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  email: z.string().min(1).max(255),
});

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);

    const subscription = await addSubscriber(values.email);

    if (subscription.status === "success") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormDescription>
                Don&apos;t worry, I won&apos;t spam you. I hate spam as much as
                you do.
              </FormDescription>
              {(status === "success" && (
                <div
                  className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Success</p>
                  <p>You are now subscribed to the newsletter.</p>
                </div>
              )) ||
                (status === "error" && (
                  <div
                    className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                    role="alert"
                  >
                    <p className="font-bold">Error</p>
                    <p>Something wrong happened.</p>
                  </div>
                ))}

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
}
