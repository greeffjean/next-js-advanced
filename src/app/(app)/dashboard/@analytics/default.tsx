import { pause } from "@/utils/pause";

export default async function DefaultDashboard() {
    await pause(3000)

    return <div className="bg-white p-4 rounded-lg w-3xs text-black">Analytics Default ...</div>;
}