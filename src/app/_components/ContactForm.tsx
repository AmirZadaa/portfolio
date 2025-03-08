"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useWeb3Forms from "@web3forms/react";

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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, { message: "Message must be at least 10 characters." }),
});

const formFields = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    Description: "Display your full name",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    Description: "Provide your email address",
  },
  {
    label: "Message",
    placeholder: "Type your message...",
    name: "message",
    type: "textarea",
    Description: "Write your message",
  },
];

export default function ContactForm() {
  const [result, setResult] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null >(false);
  const [isloading,setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const accessKey = "c78134cd-3e38-4271-9459-03d965ce18a6";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "My portifio" ,
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      form.reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

  setTimeout(async() => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setResult("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }, 3000); // 5-second delay
    
  };

  return (
    <div className="grow p-[1px] bg-background-500 rounded-2xl">
      <div className="bg-background text-card px-4 py-4 space-y-6 rounded-2xl">
        <h1 className="text-2xl font-bold text-primary-600 text-center">
          Talk to me
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <div className="space-y-6">
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name as keyof z.infer<typeof formSchema>}
                  render={({ field: fieldProps }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-lg">
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        {field.type === "textarea" ? (
                          <textarea
                            className="w-full col-span-2 min-h-[100px] border-[1px] border-background-500 hover:border-2 p-2 rounded-md bg-background text-card"
                            placeholder={field.placeholder}
                            {...fieldProps}
                          />
                        ) : (
                          <Input
                            type={field.type}
                            placeholder={field.placeholder}
                            {...fieldProps}
                            className="rounded-lg border-[1px] border-background-500 hover:border-2"
                          />
                        )}
                      </FormControl>
                      <FormDescription>{field.Description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue to-secondary-400 p-[1px] rounded-full">
              <Button
                type="submit"
                disabled={isloading}
                className="rounded-full text-card w-full text-lg bg-background hover:bg-transparent font-bold"
              >
                {!isloading ? "Submit":
                  <svg
                  className="animate-spin mr-3 border-2 border-r-green-500 border-indigo-100 h-6 w-6 rounded-full"
                  viewBox="0 0 12 12"
                ></svg>
                }
              </Button>
            </div>
          </form>
        </Form>

        {/* Success/Error Message */}
        {result && (
          <div
            className={`text-center font-semibold p-2 rounded-md ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
