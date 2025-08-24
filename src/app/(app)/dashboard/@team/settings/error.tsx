'use client';

import { useEffect } from 'react';

export default function TeamSettingsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Team settings error:', error);
  }, [error]);

  return (
    <div className="space-y-4 rounded-lg border border-red-200 bg-red-50 p-4 shadow-sm">
      <div className="font-medium text-red-700">Team Settings Error</div>
      <div className="space-y-3">
        <div className="h-9 animate-pulse rounded-md bg-red-100" />
        <div className="h-9 animate-pulse rounded-md bg-red-100" />
      </div>
      <div className="rounded-md border border-red-200 bg-white p-3">
        <p className="text-xs text-red-600 mb-3">
          {error.message || 'Failed to load team settings'}
        </p>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => window.location.href = '/dashboard'}
            className="rounded-md border border-red-300 bg-white px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
          >
            Cancel
          </button>
          <button
            onClick={reset}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
