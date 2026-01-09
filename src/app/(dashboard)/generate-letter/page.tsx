import { GenerateLetterView } from "~/components/ai/generate-letter-view";

export default function GenerateLetterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Generate Application Letter
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Based on your latest uploaded CV and Job Description.
          </p>
        </div>
        <GenerateLetterView />
      </div>
    </div>
  );
}