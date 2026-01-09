import { CvUploadForm } from "~/components/cv/cv-upload-form";

export default function CvUploadPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Upload Your CV
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            PDF, DOC, or TXT formats are supported.
          </p>
        </div>
        <CvUploadForm />
      </div>
    </div>
  );
}