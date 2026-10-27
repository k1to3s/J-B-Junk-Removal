interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: string;
  ariaLabel?: string;
}

export function Skeleton({
  className = "",
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
  ariaLabel = "Loading content...",
}: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer bg-slate-200 ${width} ${height} ${rounded} ${className}`}
      role="status"
      aria-label={ariaLabel}
      aria-busy="true"
    />
  );
}

export function CardSkeleton() {
  return (
    <div
      className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4"
      role="status"
      aria-label="Loading card content"
      aria-busy="true"
    >
      <Skeleton height="h-48" rounded="rounded-xl" />
      <Skeleton width="w-2/3" height="h-6" />
      <Skeleton height="h-4" />
      <Skeleton height="h-4" width="w-5/6" />
      <div className="pt-2 flex justify-between items-center">
        <Skeleton width="w-24" height="h-8" rounded="rounded-lg" />
        <Skeleton width="w-16" height="h-4" />
      </div>
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div
      className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl bg-slate-200 skeleton-shimmer flex flex-col items-center justify-center p-6 text-center"
      role="status"
      aria-label="Loading map representation"
      aria-busy="true"
    >
      <div className="w-12 h-12 rounded-full bg-slate-300 mb-3" />
      <div className="w-48 h-5 bg-slate-300 rounded mb-2" />
      <div className="w-32 h-4 bg-slate-300 rounded" />
    </div>
  );
}
