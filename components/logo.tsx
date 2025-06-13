import React from "react";

export const Logo = () => (
  <svg
    height="48"
    viewBox="0 0 48 48"
    width="48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="pawGradient1" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "cyan", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "purple", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="pawGradient2" x1="100%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "lime", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <circle cx="24" cy="30" fill="url(#pawGradient1)" opacity="0.9" r="8" />

    <circle cx="15" cy="18" fill="url(#pawGradient2)" opacity="0.9" r="4" />
    <circle cx="24" cy="16" fill="url(#pawGradient2)" opacity="0.9" r="4" />
    <circle cx="33" cy="18" fill="url(#pawGradient2)" opacity="0.9" r="4" />
    <circle cx="20" cy="22" fill="url(#pawGradient1)" opacity="0.85" r="3.5" />
    <circle cx="28" cy="22" fill="url(#pawGradient1)" opacity="0.85" r="3.5" />
  </svg>
);
