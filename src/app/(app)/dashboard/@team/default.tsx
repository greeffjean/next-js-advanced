import { pause } from "@/utils/pause";

const members = [
    { name: "Jane Cooper", role: "Engineering", email: "jane@example.com" },
    { name: "Wade Warren", role: "Design", email: "wade@example.com" },
    { name: "Guy Hawkins", role: "Product", email: "guy@example.com" },
];

export default async function Team() {
    await pause(3000)

    return (
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
                <div className="font-medium">Team</div>
                <button className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm">Invite</button>
            </div>
            <ul className="divide-y divide-neutral-200">
                {members.map((m) => (
                    <li key={m.email} className="flex items-center gap-3 py-3">
                        <div className="h-8 w-8 rounded-full bg-neutral-200" />
                        <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-medium">{m.name}</div>
                            <div className="truncate text-xs text-neutral-500">{m.role} • {m.email}</div>
                        </div>
                        <button className="rounded-md border border-neutral-300 bg-white px-3 py-1 text-xs">Manage</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}