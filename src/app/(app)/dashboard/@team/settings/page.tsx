import { pause } from "@/utils/pause";

export default async function TeamSettings() {
  await pause(3000)

  return (
    <form className="space-y-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="font-medium">Team Settings</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-1 text-sm">
          <span className="text-neutral-600">Team name</span>
          <input className="h-9 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-neutral-200" defaultValue="Acme Inc" />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-neutral-600">Default role</span>
          <select className="h-9 w-full rounded-md border border-neutral-300 bg-white px-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200">
            <option>Member</option>
            <option>Admin</option>
            <option>Viewer</option>
          </select>
        </label>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button type="button" className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm">Cancel</button>
        <button className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm text-white">Save changes</button>
      </div>
    </form>
  );
}