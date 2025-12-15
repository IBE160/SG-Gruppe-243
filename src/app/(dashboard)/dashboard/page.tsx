import Link from "next/link";
import { Button } from "~/components/ui/button";
import { FileText, PenTool, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CV Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Manage CV</h3>
          <p className="text-sm text-gray-500 mb-4">Upload or update your CV to ensure the AI has your latest details.</p>
          <Link href="/cv-upload">
            <Button variant="outline" className="w-full">Update CV</Button>
          </Link>
        </div>

        {/* Job Input Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
            <PenTool className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">New Job Application</h3>
          <p className="text-sm text-gray-500 mb-4">Found a job? Paste the description here to start analyzing.</p>
          <Link href="/job-description-input">
            <Button variant="outline" className="w-full">Input Job</Button>
          </Link>
        </div>

        {/* Generate Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow ring-1 ring-primary/10">
          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Generate Letter</h3>
          <p className="text-sm text-gray-500 mb-4">Create a tailored cover letter based on your CV and Job.</p>
          <Link href="/generate-letter">
            <Button className="w-full">Generate Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
