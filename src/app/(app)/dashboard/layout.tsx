import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
    children,
    analytics,
    team,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    team: React.ReactNode;
}) {
    return (
        <main className="min-h-dvh flex w-full bg-neutral-50 text-neutral-900">
            <aside className="hidden md:flex md:w-72 lg:w-80 flex-col border-r border-neutral-200 bg-white/80 backdrop-blur-sm">
                <div className="h-16 shrink-0 flex items-center gap-3 px-5 border-b border-neutral-200">
                    <Image src="/next.svg" alt="Logo" width={28} height={28} />
                    <span className="font-semibold tracking-tight">Dashboard</span>
                </div>
                <nav className="p-4 space-y-2">
                    <Link href="/dashboard" className="block rounded-md px-3 py-2 hover:bg-neutral-100">Overview</Link>
                    <Link href="/reports" className="block rounded-md px-3 py-2 hover:bg-neutral-100">Reports</Link>
                    <Link href="/dashboard" className="block rounded-md px-3 py-2 hover:bg-neutral-100">Team</Link>
                    <Link href="/dashboard/settings" className="block rounded-md px-3 py-2 hover:bg-neutral-100">Team Settings</Link>
                </nav>
                <div className="px-4 pb-4 space-y-4 overflow-y-auto">
                    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                        <h3 className="mb-3 text-sm font-medium text-neutral-600">Analytics</h3>
                        {analytics}
                    </div>
                    <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                        <h3 className="mb-3 text-sm font-medium text-neutral-600">Team</h3>
                        {team}
                    </div>
                </div>
            </aside>
            <section className="flex-1 flex min-w-0 flex-col">
                <header className="h-16 sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-neutral-200 bg-white/70 px-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <button className="md:hidden rounded-md px-2 py-1 border border-neutral-300 text-sm">Menu</button>
                        <div className="text-sm text-neutral-600">Welcome back</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <input placeholder="Search…" className="hidden md:block h-9 w-64 rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-neutral-200" />
                        <div className="h-8 w-8 rounded-full bg-neutral-200" />
                    </div>
                </header>
                <div className="p-6">
                    {children}
                </div>
            </section>
        </main>
    );
}