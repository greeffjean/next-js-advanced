'use client';

import { useEffect } from 'react';

export default function TeamError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Team slot error:', error);
  }, [error]);

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-medium text-red-700">Team Error</div>
        <button className="rounded-md border border-red-300 bg-white px-3 py-1.5 text-sm text-red-600 hover:bg-red-50">
          Retry
        </button>
      </div>
      <div className="space-y-2">
        <div className="h-10 animate-pulse rounded-md bg-red-100" />
        <div className="h-10 animate-pulse rounded-md bg-red-100" />
        <div className="h-10 animate-pulse rounded-md bg-red-100" />
      </div>
      <div className="mt-3 rounded-md border border-red-200 bg-white p-3">
        <p className="text-xs text-red-600 mb-2">
          {error.message || 'Failed to load team data'}
        </p>
        <button
          onClick={reset}
          className="rounded-md bg-red-600 px-3 py-1.5 text-xs text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
