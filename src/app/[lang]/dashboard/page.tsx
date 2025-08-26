export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-sm text-neutral-500">Revenue</div>
                    <div className="mt-2 text-2xl font-semibold">$42,350</div>
                    <div className="mt-1 text-xs text-emerald-600">+12.3% from last week</div>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-sm text-neutral-500">Active Users</div>
                    <div className="mt-2 text-2xl font-semibold">8,124</div>
                    <div className="mt-1 text-xs text-emerald-600">+3.8% today</div>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-sm text-neutral-500">Conversions</div>
                    <div className="mt-2 text-2xl font-semibold">4.7%</div>
                    <div className="mt-1 text-xs text-rose-600">-0.4% this week</div>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="text-sm text-neutral-500">Tickets</div>
                    <div className="mt-2 text-2xl font-semibold">126</div>
                    <div className="mt-1 text-xs text-neutral-500">last 24 hours</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="font-medium">Traffic</div>
                        <select className="h-8 rounded-md border border-neutral-300 bg-white px-2 text-sm">
                            <option>7 days</option>
                            <option>30 days</option>
                            <option>90 days</option>
                        </select>
                    </div>
                    <div className="h-64 rounded-md bg-neutral-100" />
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 font-medium">Recent activity</div>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                            <div>
                                <div className="font-medium">Payment received</div>
                                <div className="text-neutral-500">Invoice #28403 • 2m ago</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" />
                            <div>
                                <div className="font-medium">User signed up</div>
                                <div className="text-neutral-500">john@example.com • 12m ago</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                            <div>
                                <div className="font-medium">Server deployment</div>
                                <div className="text-neutral-500">v1.2.8 • 1h ago</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}