"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Sparkles, Download, Lightbulb } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";

export function GenerateLetterView() {
  const [letterContent, setLetterContent] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const generateLetter = api.ai.generateLetter.useMutation({
    onSuccess: (data) => {
      setLetterContent(data.content);
      setSuggestions(data.suggestions ?? []);
      toast.success("Letter generated successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleGenerate = () => {
    generateLetter.mutate();
  };

  const handleDownload = () => {
    if (!letterContent) return;
    const blob = new Blob([letterContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "application-letter.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded application-letter.txt");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2">
            <Card className="w-full h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                AI Generator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {letterContent ? (
                <Textarea
                    value={letterContent}
                    onChange={(e) => setLetterContent(e.target.value)}
                    className="min-h-[500px] font-mono text-sm"
                />
                ) : (
                <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed bg-gray-50 text-gray-400">
                    <p>Click generate to create your letter</p>
                </div>
                )}
            </CardContent>
            <CardFooter className="justify-between">
                <Button variant="outline" onClick={handleDownload} disabled={!letterContent}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                </Button>
                <Button onClick={handleGenerate} disabled={generateLetter.isPending}>
                {generateLetter.isPending ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                    </>
                ) : (
                    "Generate Letter"
                )}
                </Button>
            </CardFooter>
            </Card>
        </div>

        {/* Suggestions Panel */}
        <div className="lg:col-span-1">
            <Card className="h-full bg-blue-50 border-blue-100">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <Lightbulb className="h-5 w-5" />
                        CV Improvements
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {suggestions.length > 0 ? (
                        <ul className="space-y-4">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} className="bg-white p-3 rounded-md shadow-sm border border-blue-100 text-sm text-gray-700">
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-500 italic">
                            Generate a letter to see AI suggestions for improving your CV tailored to this job.
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    </div>
  );
}