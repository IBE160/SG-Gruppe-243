"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];

const formSchema = z.object({
  cvFile: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
      "Only .pdf, .doc, .docx, and .txt formats are supported."
    ),
});

export function CvUploadForm() {
  const router = useRouter();
  const uploadCv = api.cv.upload.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const file = values.cvFile;

    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Content = reader.result?.toString().split(",")[1]; // Get base64 part
      if (!base64Content) {
        toast.error("Failed to read file content.");
        return;
      }

      try {
        await uploadCv.mutateAsync({
          fileName: file.name,
          fileType: file.type,
          fileContent: base64Content,
        });
        toast.success("CV uploaded successfully! Redirecting...");
        form.reset();
        setTimeout(() => router.push("/dashboard"), 1500);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "An unknown error occurred during upload.");
      }
    };

    reader.onerror = () => {
      toast.error("Failed to read file.");
    };
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cvFile"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>CV File (PDF, DOC, TXT)</FormLabel>
              <FormControl>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX, TXT (MAX. 5MB)
                      </p>
                      {value && value.name && (
                        <p className="mt-2 text-sm text-gray-700">Selected file: {value.name}</p>
                      )}
                    </div>
                    <Input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={(event) => {
                        onChange(event.target.files && event.target.files[0]);
                      }}
                      {...fieldProps}
                    />
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={uploadCv.isPending}>
          {uploadCv.isPending ? "Uploading..." : "Upload CV"}
        </Button>
      </form>
    </Form>
  );
}