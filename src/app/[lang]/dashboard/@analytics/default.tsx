import { pause } from "@/utils/pause";

export default async function Analytics() {
    await pause(3000)

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-neutral-200 bg-white p-3">
                    <div className="text-xs text-neutral-500">Visitors</div>
                    <div className="mt-1 text-lg font-semibold">24,583</div>
                </div>
                <div className="rounded-md border border-neutral-200 bg-white p-3">
                    <div className="text-xs text-neutral-500">Bounce rate</div>
                    <div className="mt-1 text-lg font-semibold">38%</div>
                </div>
            </div>
            <div className="rounded-md border border-neutral-200 bg-white p-3">
                <div className="mb-2 text-sm font-medium">Sessions</div>
                <div className="h-32 rounded-md bg-neutral-100" />
            </div>
        </div>
    );
}