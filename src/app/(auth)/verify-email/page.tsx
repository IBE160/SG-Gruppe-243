"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";
import { api } from "~/trpc/react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { toast } from "sonner";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const verify = api.user.verifyEmail.useMutation({
    onSuccess: () => {
      toast.success("Email verified successfully!");
      setTimeout(() => router.push("/login"), 2000);
    },
    onError: (error) => {
      toast.error(error.message || "Verification failed");
    },
  });

  useEffect(() => {
    if (token && !verify.isPending && !verify.isSuccess && !verify.isError) {
      verify.mutate({ token });
    }
  }, [token]);

  if (!token) {
    return (
        <div className="text-center space-y-4">
            <p className="text-lg font-medium text-gray-700">Check your email</p>
            <p className="text-gray-500">We've sent a verification link to your email address. Please click the link to activate your account.</p>
        </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      {verify.isPending && <p>Verifying your email...</p>}
      {verify.isSuccess && <p className="text-green-600 font-medium">Email verified! Redirecting to login...</p>}
      {verify.isError && <p className="text-red-600 font-medium">Verification failed. {verify.error?.message}</p>}
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-center">Email Verification</CardTitle>
            </CardHeader>
            <CardContent>
                <Suspense fallback={<div>Loading...</div>}>
                    <VerifyEmailContent />
                </Suspense>
            </CardContent>
        </Card>
      </div>
  );
}
