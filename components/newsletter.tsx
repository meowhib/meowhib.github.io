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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().min(1).max(255),
});

export default function NewsletterForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<
    "idle" | "error" | "success" | "pending"
  >("idle");
  const pending = status === "pending";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);

    setStatus("pending");
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
                <Input placeholder={dict?.about?.your_email} {...field} />
              </FormControl>
              <FormDescription>
                {dict?.about?.dont_worry_i_hate_spam_too}
              </FormDescription>
              {(status === "success" && (
                <div
                  className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">{dict?.about?.success}</p>
                  <p>{dict?.about?.success_description}</p>
                </div>
              )) ||
                (status === "error" && (
                  <div
                    className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                    role="alert"
                  >
                    <p className="font-bold">{dict?.about?.error}</p>
                    <p>{dict?.about?.error_description}</p>
                  </div>
                ))}

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" aria-disabled={pending} disabled={pending}>
          {pending && <Loader2 className="animate-spin mr-2" size={16} />}
          {dict?.about?.subscribe}
        </Button>
      </form>
    </Form>
  );
}
