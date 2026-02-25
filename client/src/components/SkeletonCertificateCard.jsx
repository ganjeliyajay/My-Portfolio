import React from "react";

export default function SkeletonCertificateCard() {
  return (
    <div className="relative mt-6 rounded-2xl overflow-hidden border border-border bg-card shadow-md">

      {/* Image Skeleton */}
      <div className="relative h-52 w-full bg-muted overflow-hidden">
        <div className="absolute inset-0 shimmer"></div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {/* Title Skeleton (center like real card) */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-40 h-6 bg-muted rounded overflow-hidden">
        <div className="shimmer absolute inset-0"></div>
      </div>

      {/* Button Skeleton */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-32 h-4 bg-muted rounded overflow-hidden">
        <div className="shimmer absolute inset-0"></div>
      </div>

    </div>
  );
}