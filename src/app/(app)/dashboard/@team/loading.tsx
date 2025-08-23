export default function TeamLoading() {
    return (
        <div className="space-y-3 rounded-lg border border-neutral-200 bg-amber-100 p-4 shadow-sm">
            <div className="h-5 w-24 animate-pulse rounded bg-neutral-200" />
            <div className="space-y-2">
                <div className="h-10 animate-pulse rounded-md bg-neutral-200" />
                <div className="h-10 animate-pulse rounded-md bg-neutral-200" />
                <div className="h-10 animate-pulse rounded-md bg-neutral-200" />
            </div>
        </div>
    );
}