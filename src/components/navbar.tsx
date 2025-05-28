import React from 'react';
import { Button } from '@/components/ui/8bit/button';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-2 text-white shadow z-50">
      <span className="font-bold text-lg">My App</span>
      <Button
        className="p-2 transition"
        aria-label="Info"
        variant="default"
      >
        {/* Info icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      </Button>
    </nav>
  );
}