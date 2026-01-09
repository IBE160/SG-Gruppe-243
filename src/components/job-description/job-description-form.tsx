"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const formSchema = z.object({
  jobDescriptionText: z.string().min(10, "Job description must be at least 10 characters.").max(10000, "Job description cannot exceed 10,000 characters."),
});

export function JobDescriptionForm() {
  const router = useRouter();
  const saveJobDescription = api.jobDescription.save.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescriptionText: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await saveJobDescription.mutateAsync({ text: values.jobDescriptionText });
      toast.success("Job description saved successfully! Redirecting...");
      form.reset();
      setTimeout(() => router.push("/generate-letter"), 1500);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An unknown error occurred while saving job description.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="jobDescriptionText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Paste the job description here..."
                  className="min-h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={saveJobDescription.isPending}>
          {saveJobDescription.isPending ? "Saving..." : "Save Job Description"}
        </Button>
      </form>
    </Form>
  );
}