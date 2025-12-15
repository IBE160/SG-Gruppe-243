import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FileText, 
  PenTool, 
  Sparkles, 
  Settings,
  LogOut
} from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-600">
      {/* Sidebar - Direction 3 Style */}
      <div className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold mr-3 shadow-sm">AI</div>
          <span className="text-lg font-bold text-gray-700 tracking-tight">AI CV Assistant</span>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-6">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Workspace</p>
          
          <Link href="/dashboard" className="text-gray-600 hover:bg-gray-50 hover:text-primary group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors">
            <LayoutDashboard className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" />
            Dashboard
          </Link>

          <Link href="/cv-upload" className="text-gray-600 hover:bg-gray-50 hover:text-primary group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors">
            <FileText className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" />
            CV Profile
          </Link>

          <Link href="/job-description-input" className="text-gray-600 hover:bg-gray-50 hover:text-primary group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors">
            <PenTool className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" />
            Input Job
          </Link>

          <Link href="/generate-letter" className="text-gray-600 hover:bg-gray-50 hover:text-primary group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors">
            <Sparkles className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" />
            Generate Letter
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {session.user?.name?.[0] ?? "U"}
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-700 truncate">{session.user?.name}</p>
              <p className="text-xs text-gray-400 truncate">{session.user?.email}</p>
            </div>
          </div>
           <div className="mt-2 px-2">
                <form
                  action={async () => {
                    "use server";
                    const { signOut } = await import("~/server/auth");
                    await signOut();
                  }}
                >
                  <button type="submit" className="flex items-center text-xs text-gray-400 hover:text-red-500 transition-colors w-full">
                      <LogOut className="mr-2 h-3 w-3" />
                      Sign Out
                  </button>
                </form>
            </div>
        </div>
      </div>

      {/* Main Content Area - Split View / Canvas Style */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 shadow-sm z-10">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">Workspace</h1>
            </div>
            <div className="flex items-center space-x-4">
                {/* Add actions here if needed */}
            </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
            {children}
        </main>
      </div>
    </div>
  );
}
