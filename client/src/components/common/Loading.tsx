"use client";

export function Loading() {
  return (
    <div className="flex items-center justify-center py-12">
      {/* Main spinner */}
      <div className="relative w-12 h-12">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>

        {/* Animated gradient spinner */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-cyan-500 rounded-full animate-spin"></div>
      </div>

      {/* Optional: Loading text */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// Export variants for different sizes
export function LoadingSmall() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative w-6 h-6">
        <div className="absolute inset-0 border-2 border-slate-700 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export function LoadingLarge() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-cyan-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-slate-400 mt-4">Loading data...</p>
    </div>
  );
}

// Inline variant for minimal space
export function LoadingInline() {
  return (
    <div className="inline-block">
      <div className="relative w-4 h-4">
        <div className="absolute inset-0 border-2 border-slate-600 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
