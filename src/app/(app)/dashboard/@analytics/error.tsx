'use client';

import { useEffect } from 'react';

export default function AnalyticsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Analytics slot error:', error);
  }, [error]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-md border border-red-200 bg-red-50 p-3">
          <div className="text-xs text-red-600">Error loading analytics</div>
          <div className="mt-1 text-lg font-semibold text-red-700">--</div>
        </div>
        <div className="rounded-md border border-red-200 bg-red-50 p-3">
          <div className="text-xs text-red-600">Error loading data</div>
          <div className="mt-1 text-lg font-semibold text-red-700">--</div>
        </div>
      </div>
      <div className="rounded-md border border-red-200 bg-red-50 p-3">
        <div className="mb-2 text-sm font-medium text-red-700">Analytics Error</div>
        <p className="text-xs text-red-600 mb-3">
          {error.message || 'Failed to load analytics data'}
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
