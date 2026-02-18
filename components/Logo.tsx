"use client";

/**
 * MarkitAI logo: gradient M icon + wordmark.
 * Add public/logo.png to use your uploaded image instead.
 */
export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MarkitAI"
    >
      <defs>
        <linearGradient id="logo-m-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D3FC" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* M shape */}
      <path
        d="M4 28L4 12L14 22L24 12L24 28L20 28L20 20L14 24L8 20L8 28Z"
        fill="url(#logo-m-grad)"
      />
      {/* AI indicator dots */}
      <circle cx="32" cy="11" r="2.5" fill="#8B5CF6" />
      <circle cx="37" cy="9" r="1.8" fill="#2563EB" />
      <circle cx="42" cy="11" r="2.5" fill="#34D3FC" />
      {/* Wordmark */}
      <text x="52" y="27" fontFamily="Inter, system-ui, sans-serif" fontSize="19" fontWeight="700" fill="#1A1A2E">
        Markit
      </text>
      <text x="112" y="27" fontFamily="Inter, system-ui, sans-serif" fontSize="19" fontWeight="700" fill="#8B5CF6">
        AI
      </text>
    </svg>
  );
}
