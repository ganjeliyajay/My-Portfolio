import React from "react";

export const SkeletonProjectCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md shadow-lg">

      <div className="p-0">

        {/* Image Skeleton */}
        <div className="relative h-48 overflow-hidden bg-muted/60">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="p-6 space-y-4">

          {/* Tags */}
          <div className="flex gap-2">
            <div className="relative h-5 w-16 overflow-hidden rounded-full bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <div className="relative h-5 w-12 overflow-hidden rounded-full bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <div className="relative h-5 w-14 overflow-hidden rounded-full bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>

          {/* Title */}
          <div className="relative h-6 w-3/4 overflow-hidden rounded-md bg-muted/60">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="relative h-4 w-full overflow-hidden rounded bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <div className="relative h-4 w-5/6 overflow-hidden rounded bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <div className="relative h-4 w-2/3 overflow-hidden rounded bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-3 pt-2">
            <div className="relative h-7 w-7 overflow-hidden rounded bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <div className="relative h-7 w-7 overflow-hidden rounded bg-muted/60">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};