import Link from "next/link";
import { Button } from "~/components/ui/button";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
          AI CV Assistant
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl text-center">
          Tailor your CV and Cover Letter to any job description instantly using AI.
          Empowered. Ready. Professional.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="outline" size="lg">Login</Button>
          </Link>
          <Link href="/register">
            <Button size="lg">Register</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}