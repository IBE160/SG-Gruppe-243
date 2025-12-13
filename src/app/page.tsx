import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
          AI CV Assistant
        </h1>
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