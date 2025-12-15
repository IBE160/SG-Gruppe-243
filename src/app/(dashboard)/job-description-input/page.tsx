import { JobDescriptionForm } from "~/components/job-description/job-description-form";

export default function JobDescriptionInputPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Input Job Description
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Paste the job description text below for AI analysis.
          </p>
        </div>
        <JobDescriptionForm />
      </div>
    </div>
  );
}