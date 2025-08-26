export default function AnalyticsLoading() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <div className="h-14 animate-pulse rounded-md bg-neutral-200" />
                <div className="h-14 animate-pulse rounded-md bg-neutral-200" />
            </div>
            <div className="h-36 animate-pulse rounded-md bg-neutral-200" />
        </div>
    );
}