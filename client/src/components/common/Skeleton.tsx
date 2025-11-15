"use client";

interface SkeletonProps {
  className?: string;
  count?: number;
}

export function Skeleton({
  className = "h-12 w-full",
  count = 1,
}: SkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${className} bg-slate-700/30 rounded-lg animate-pulse`}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </>
  );
}

// Chart skeleton
export function ChartSkeleton() {
  return (
    <div className="w-full h-64 bg-slate-700/20 rounded-lg p-4 space-y-3 animate-pulse">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-40 w-full" />
      <div className="grid grid-cols-3 gap-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}

// Card skeleton
export function CardSkeleton() {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 space-y-4 animate-pulse">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-20 w-full" />
      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

// List skeleton
export function ListSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="bg-slate-800/30 rounded-lg p-4 space-y-2 animate-pulse"
        >
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  );
}
